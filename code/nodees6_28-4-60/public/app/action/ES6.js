class ES6 {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        let items = SimulateData.simulateJSonData();

        let plans = {
            id: 'textfield',
            title: 'radio',
            authors: 'checkbox',
            price: 'textfield',
            stock: 'button'
        }

        let objects = [
            { id: 'textfield', option: { placeholder: true, value: true } },
            { title: 'radio', option: { checked: true } },
            { authors: 'checkbox', option: { checked: true } },
            { price: 'textfield', option: { placeholder: false, value: true } },
            { stock: 'button', option: { placeholder: true } },
        ];

        let comp = new Component();
        comp.createHTMLTag(objects, items[5]);
        
        let ui = new HtmlUI();
        let map = ui.createMapUI(plans, items[5]);
        let _this = this;
        let html = '';
        map.forEach(function (item, key, mapObj) {
            if (key == 'authors') {
                html += '<div>' + item + '</div>';
            } else {
                html += item;
            }
        });

        document.getElementById('formIndex').innerHTML = html;

    }
}