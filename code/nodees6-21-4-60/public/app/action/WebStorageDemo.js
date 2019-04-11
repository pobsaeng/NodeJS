class WebStorageDemo {
    constructor() {
        this.initEvent();
    }
    initEvent() {
        let TABLENAME = "Obtimust";
        let FIELDS = ["userid", "title", "authors", "price", "stock"];

        let db = new WebStorage('Order');

        let items = SimulateData.simulateJSonData(),
            PRODUCT = 'Product',
            fields = Object.keys(items[0]);
        this.dataItems = items;
        let _thisapp = this;

        let book1 = new Object();
        let book2 = new Object();
        book1.userid = '1', book1.title = 'JavaScript', book1.authors = 'Pob', book1.price = '1,200', book1.stock = '10';
        book2.userid = '2', book2.title = 'Java', book2.authors = '', book2.price = '1,000', book2.stock = '5';

        let btnLocalDb = document.getElementById('btnWebstorage');
        btnLocalDb.addEventListener('click', function () {
            if (!db.tableExists(PRODUCT)) {
                let status = db.createTable(PRODUCT, fields);
                if (status) {
                    let _items = _thisapp.dataItems;
                    for (let i = 0; i < _items.length; i++) {
                        let id = db.insert(PRODUCT, _items[i]);
                        db.commit();
                    }
                }
            }

            if (!db.tableExists(TABLENAME)) {
                let status = db.createTable(TABLENAME, FIELDS);
                if (status) {

                    db.insert(TABLENAME, book1);
                    db.insert(TABLENAME, book2);
                    db.commit();
                }
            }
            let table_name = PRODUCT;
            // let items = db.queryByValues(table_name, {"stock": "20"}, null);
            let dbObj = db;
            let items1 = db.selectByKV(dbObj.db.data[table_name], { 'stock': '5, 10, 20' });
            let items2 = db.selectByKV(items1, { 'id': '4, 6, 17' });
            let items3 = db.selectByKV(items2, { 'price': '195, 140' });

            for (let i = 0; i < items3.length; i++) {
                for (let key in items3[i]) {
                    if (key == 'price' && parseInt(items3[i]['price']) == 140) {
                        console.log( items3[i] );
                    }
                }
            }


        });
    }
}