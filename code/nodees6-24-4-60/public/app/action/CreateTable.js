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
    getPosition(el) {
        var xPosition = 0;
        var yPosition = 0;

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
                var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

                xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
                yPosition += (el.offsetTop - yScrollPos + el.clientTop);
            } else {
                xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            }

            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }
    createTable() {
        let lg = new Langauge('th');
        let dom = new Dom();
        let domEl = document.getElementById('myTable');

        let el = document.getElementById('myDiv');
        let com = new Component();

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

                    // console.log(_this.getPosition(tr));

                    el.innerHTML = com.getModal(record[0]);
                    com.setBlockModal('myModal');

                    updateLanguage(lg);
                }
                return tr;
            });


    }
}