class WebStorageDemo {
    constructor() {
        this.initEvent();
    }
    initEvent() {
        let TABLENAME = "Obtimust";
        let FIELDS = ["userid", "title", "authors", "price", "stock"];

        let db = new WebStorage('Transformer');

        let book1 = new Object();
        let book2 = new Object();
        book1.userid = '1', book1.title = 'JavaScript', book1.authors = 'Pob', book1.price = '1,200', book1.stock = '10';
        book2.userid = '2', book2.title = 'Java', book2.authors = '', book2.price = '1,000', book2.stock = '5';

        let btnLocalDb = document.getElementById('btnWebstorage');
        btnLocalDb.addEventListener('click', function () {
            if (!db.tableExists(TABLENAME)) {
                let status = db.createTable(TABLENAME, FIELDS);
                if (status) {
                    db.insert(TABLENAME, book1);
                    db.insert(TABLENAME, book2);
                    db.commit();
                }
            } else {
                // db.insert(TABLENAME, book1);
                // db.insert(TABLENAME, book2);
                // db.commit();
            }
            let table_name = 'Obtimust';
            // console.log( db.rowCount( table_name ) );
            let items = db.queryByValues(table_name, {"stock":"5"}, '1');
            console.log(db.select(table_name, items[0]));

        });
    }
}