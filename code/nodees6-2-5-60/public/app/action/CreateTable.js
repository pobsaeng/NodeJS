class CreateTable {
    constructor() {
        this.init();
    }
    init() {
        document.title = 'Create Table by JavaScript';
        this.initEvent();
    }
    initEvent() {
        this.createTable();
    }
    
    createTable() {
        let lg = new Langauge('th');
        let dom = new Dom();
        let domEl = document.getElementById('myTable');

        let el = document.getElementById('myDiv');
        let com = new Component();
        let boot = new Bootstrap();

        let tblObj = new Table(dom);
        let items = SimulateData.simulateJSonData(); //static function

        tblObj.generateTable(domEl, items,
            function (td, colIndex, rowIndex) {
                if (colIndex == 0) {
                    td.innerHTML = '<div style="text-align:center; color:red; width:30px;">' + td.innerHTML + '</div>';
                }
                if (colIndex == 3) {
                    td.innerHTML = '<div style="text-align:center; color:red;">' + td.innerHTML + '</div>';
                }
                if (colIndex == 4) {
                    td.innerHTML = '<div style="color:blue;">' + td.innerHTML + '</div>';
                }
                return td;
            },
            function (tr, index) {
                tr.onclick = function (row) {
                    if (tr.rowIndex == 0) return;
                    let record = tblObj.convertRowObject(tr, tblObj.getTableHeader(items[0]));
                    el.innerHTML = boot.getModal(record[0]);
                    boot.setBlockModal('myModal');

                    updateLanguage(lg);
                }
                return tr;
            });
            let png = new Pagination();
            let paging = png.getPagination(items);
            document.getElementById('myPagination').innerHTML = paging;
    }
}