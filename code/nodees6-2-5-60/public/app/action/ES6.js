class ES6 {
    constructor() {
        this.initEvent();
    }

    initEvent() {
        let items = SimulateData.simulateJSonData();

        let object = {};
        for (let key in items[0]) {
            if (key == 'id') {
                object[key] = { control: 'textfield', placeholder: true, valueDisable: false };
            } else if (key == 'price') {
                object[key] = { control: 'textarea', placeholder: true, valueDisable: true };
            }else if (key == 'stock') {
                object[key] = { control: 'email', placeholder: true, valueDisable: true };
            } else if (key == 'title') {
                // object[key] = { control: 'radio', placeholder: true, valueDisable: true };
            } else if (key == 'authors') {
                // object[key] = { control: 'checkbox', placeholder: true, valueDisable: false };
            }

        }
        object['button'] = { control: 'button', btnGroup:{btn1:'Save', btn2:'Edit', btn3:'Delete', btn4:'Clear'} };

        let ui = new HtmlUI();
        let formLayout = [
            { layout: 'vertical' },
            { layout: 'horizontal', control: 'col-sm-10', lable: 'col-sm-2' }
        ];

        let html = ui.createUI(formLayout[1], object, items[0]);

        document.getElementById('formIndex').innerHTML = html;

    }
}