class Table {
    constructor(dom) {
        this.dom = dom || new Dom();
    }
    generateTable(domEl, items, callbackCell, callbackRow, funComplete) {
        let dom = this.dom;
        let domDiv = dom.validateDom(domEl);

        let fields = Object.keys(items[0]);
        let tblId = dom.getNodeByAttribute(domEl).nodeValue + '-Real';

        let table = dom.createTag("table", {
            id: tblId,
            class: "table table-condensed table-bordered table-hover",
            style: "padding:10px;"
        });

        let thead = dom.createTag("thead", {});
        let trh = dom.createTag("tr", {});
        for (let a = 0; a < fields.length; a++) {
            let tdh = dom.createTag("th", {}, fields[a]);
            //if (a == 3) tdh.innerHTML = '<input id="headCheck" type="checkbox"/>';
            tdh.setAttribute('data-lang', '{'+fields[a]+'}');
            trh.appendChild(tdh);
            thead.appendChild(trh);
            table.appendChild(thead);
        }

        let tbody = dom.createTag("tbody", {});
        for (let i = 0; i < items.length; i++) {
            let tr = dom.createTag("tr", {style:'cursor: pointer;'});
            for (let j = 0; j < fields.length; j++) {
                let td = dom.createTag("td", { class: "td" }, "" + items[i][fields[j]]);
                tr.appendChild(callbackCell(td, j, i, table));
            }
            tbody.appendChild(callbackRow(tr, i));
        }
        table.appendChild(tbody);
        domDiv.appendChild(table);

        // let lg = new Langauge('th');
        // updateLanguage(lg);
    }
    convertAllObject(domEl) {
        let dom = this.dom;
        let table = dom.validateDom(domEl);
        let data = []; // first row needs to be headers 
        let headers = [];
        for (let i = 0; i < table.rows[0].cells.length; i++) {
            //attribute name or header text
            let atId = table.rows[0].cells[i].getAttribute('id');
            if (atId != null) {
                headers[i] = table.rows[0].cells[i].getAttribute('id');

            } else {
                headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
            }
        }
        // go through cells 
        for (let i = 2; i < table.rows.length; i++) {
            let tableRow = table.rows[i]; let rowData = {};
            for (let j = 0; j < tableRow.cells.length; j++) {
                rowData[headers[j]] = dom.removeHtml(tableRow.cells[j].innerHTML);
            }
            data.push(rowData);
        }
        return data;
    }
    convertRowObject(tr, head) {
        let data = [];
        let headers = [];
        for (let i = 0; i < head.length; i++) {
            headers[i] = head[i];
        }

        let rowData = {};
        for (let j = 0; j < tr.cells.length; j++) {
            rowData[headers[j]] = this.dom.removeHtml(tr.cells[j].innerHTML);
        }
        data.push(rowData);//json to array
        return data;
    }
    getTableHeader(items) {
        return Object.keys(items);
    }
}