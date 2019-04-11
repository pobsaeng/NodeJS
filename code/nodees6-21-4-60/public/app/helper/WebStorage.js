class WebStorage {
    constructor(dbName) {
        let db_prefix = 'db_';
        this.dbName = dbName;
        this.dbId = db_prefix + this.dbName;
        this.dbNew = false;
        this.db = null;
        this.init();
    }
    init() {
        this.db = localStorage[this.dbId];
        if (!(this.db && (this.db = JSON.parse(this.db)) && this.db.tables && this.db.data)) {
            if (!this.validateName(this.dbName)) {
                this.error("The name '" + this.dbName + "'" + " contains invalid characters.");
            } else {
                this.db = { tables: {}, data: {} };
                this.commit();
            }
        }
    }
    getKeys() {
        let key = [];
        for (let i = 0; i < localStorage.length; i++) {
            let k = localStorage.key(i);
            if (k != null) {
                key[i] = localStorage.key(i);
            }
        }
        return key;
    }
    findKey(strKey) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === strKey) {
                return i;
            }
        }
        return -1;
    }
    removeKey(strKey) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === strKey) {
                localStorage.removeItem(strKey);
                return true;
            }
        }
        return false;
    }
    validateData(table_name, data) {
        let field = '', new_data = {};
        for (let i = 0; i < this.db.tables[table_name].fields.length; i++) {
            field = this.db.tables[table_name].fields[i];
            new_data[field] = data[field] ? data[field] : null;
        }
        return new_data;
    }
    validFields(table_name, data) {
        let field = '', new_data = {};

        for (let i = 0; i < this.db.tables[table_name].fields.length; i++) {
            field = this.db.tables[table_name].fields[i];

            if (data[field]) {
                new_data[field] = data[field];
            }
        }
        return new_data;
    }
    clone(obj) {
        let new_obj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                new_obj[key] = obj[key];
            }
        }
        return new_obj;
    }
    truncate(table_name) {
        this.db.tables[table_name].auto_increment = 1;
        this.db.data[table_name] = {};
    }

    // number of rows in a table
    rowCount(table_name) {
        let count = 0;
        for (let id in this.db.data[table_name]) {
            if (this.db.data[table_name].hasOwnProperty(id)) {
                count++;
            }
        }
        return count;
    }
    insert(table_name, data) {
        data = this.validateData(table_name, data); //put null
        //data.id = this.db.tables[table_name].auto_increment;
        let auto_id = this.db.tables[table_name].auto_increment; //last insert id

        this.db.data[table_name][this.db.tables[table_name].auto_increment] = data;
        this.db.tables[table_name].auto_increment++;
        return auto_id;
    }
    selectByKV(items, queryObj) {
        let results = [];
        let key = Object.keys(queryObj);

        for (let id in items) {
            let record = items[id];

            for (let k in record) {
                if (k == key[0]) { //first key
                    let v = queryObj[key[0]]; //get values more than one
                    let vals = v.split(',');
                    //loop for values
                    for (let c = 0; c < vals.length; c++) {
                        if (record[k] == vals[c].trim()) {//compare values
                            if (record != undefined) results.push(record); //keep record
                        }
                    }
                }
            }
        }
        return results;
    }
    queryByValues(table_name, data, limit) {
        let result_ids = [],
            exists = false,
            row = null;

        // loop through all the records in the table, looking for matches
        for (let id in this.db.data[table_name]) {

            if (!this.db.data[table_name].hasOwnProperty(id)) {
                continue;
            }

            row = this.db.data[table_name][id];

            exists = false;

            for (let field in data) {
                if (!data.hasOwnProperty(field)) {
                    continue;
                }

                // if the field is a string, do a case insensitive comparison
                if (typeof data[field] == 'string' && row[field] != undefined) {
                    if (row[field].toString().toLowerCase() == data[field].toString().toLowerCase()) {
                        exists = true;
                        break;
                    }
                } else {
                    //not a case insensitive
                    if (row[field] == data[field]) {
                        exists = true;
                        break;
                    }
                }
            }
            if (exists) {
                result_ids.push(row);
            }
            if (!this.isBlank(limit)) {
                if (result_ids.length == limit) {
                    break;
                }
            }
        }
        return result_ids;
    }
    createTable(table_name, fields) {
        let result = false;
        if (!this.validateName(table_name)) {
            this.error("The database name '" + table_name + "' contains invalid characters.");
        } else if (this.tableExists(table_name)) {
            this.error("The table name '" + table_name + "' already exists.");
        } else {
            // make sure field names are valid
            let isValid = true;
            for (let i = 0; i < fields.length; i++) {
                if (!this.validateName(fields[i])) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                // //--cannot use indexOf due to <IE9 incompatibility--
                // //--de-duplicate the field list--
                // let fields_literal = {};
                // for (let i = 0; i < fields.length; i++) {
                //     fields_literal[fields[i]] = true;
                // }
                // //--id is a reserved field name--
                // //--delete fields_literal['id'];--
                // let first_id = fields[0];

                // delete fields_literal[first_id];
                // //--new keep files name--
                // fields = [first_id];
                // for (let field in fields_literal) {
                //     if (fields_literal.hasOwnProperty(field)) {
                //         fields.push(field);
                //     }
                // }

                this.db.tables[table_name] = { fields: fields, auto_increment: 1 };
                this.db.data[table_name] = {}; //empty
                result = true;
            } else {
                this.error("One or more field names invalid characters.");
            }
        }

        return result;
    }
    error(msg) {
        throw new Error(msg);
    }
    commit() {
        localStorage[this.dbId] = JSON.stringify(this.db);
    }
    validateName(name) {
        return name.match(/[^a-z_0-9]/ig) ? false : true;
    }
    isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
    tableExists(table_name) {
        return this.db.tables[table_name] ? true : false;
    }
}