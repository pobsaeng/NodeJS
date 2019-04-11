class Component {
    constructor() { }
    getInputText(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div class="<% this.divCls %>">' +
            '<label class="<% this.labelCls %>" data-lang="{<% index %>}">Text</label>' +
            '<input type="text" id="<% index %>" name="<% index %>" value="<% this.objects[index] %>" class="<% this.textfieldCls %>"' +
            '<% if(this.placeholder){ %> placeholder="{<% index %>}" <% } %> >' +
            '</div>' +
            '<% } %>';

        let textInput = tpl.templateEngine(template, objects);
        return textInput;
    }
    getRadio(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div class="<% this.divCls %>">' +
            '<label class="<% this.labelCls %>">' +
            '<input type="radio" value="<% this.objects[index] %>" id="<% index %>" name="<% index %>" data-lang="{<% index %>}">' +
            '<% index %>' +
            '</label>' +
            '</div>' +
            '<% } %>';

        let radio = tpl.templateEngine(template, objects);
        return radio;
    }
    getNewDiv(htmlText) {
        return '<div>' + htmlText + '</div>';
    }
    getCheckBox(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div class="<% this.divCls %>">' +
            '<label class="<% this.labelCls %>">' +
            '<input type="checkbox" value="<% this.objects[index] %>" id="<% index %>" name="<% index %>" data-lang="{<% index %>}">' +
            '<% index %>' +
            '</label>' +
            '</div>' +
            '<% } %>';

        let checkbox = tpl.templateEngine(template, objects);
        return checkbox;
    }
    getEmail(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div class="<% this.divCls %>">' +
            '<label class="<% this.labelCls %>" data-lang="{<% index %>}"></label>' +
            '<input type="email" class="<% this.emailCls %>" value="<% this.objects[index] %>" id="<% index %>" name="<% index %>">' +
            '</div>' +
            '<% } %>';
        let email = tpl.templateEngine(template, objects);
        return email;
    }

    getButton(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<span class="<% this.spanCls %>">' +
            '<input type="submit" id="btnAdd" class="<% this.buttonCls %>" data-lang="{<% index %>}" value="{<% index %>}">' +
            '</span>' +
            '<% } %>';
        let button = tpl.templateEngine(template, objects);
        return button;
    }
    getHTMLText(text, object) {
        let htmlText = '';
        switch (text) {
            case 'textfield':
                //set increase property
                let txtItems = new Object();
                txtItems['placeholder'] = true,
                    txtItems['divCls'] = 'form-group',
                    txtItems['labelCls'] = '',
                    txtItems['textfieldCls'] = 'form-control input-sm',
                    txtItems['objects'] = object;
                htmlText = this.getInputText(txtItems);
                break;
            case 'radio':
                let rdoItems = new Object();
                rdoItems['objects'] = object,
                    rdoItems['labelCls'] = '',
                    rdoItems['divCls'] = 'radio-inline';
                htmlText = this.getRadio(rdoItems);
                break;
            case 'checkbox':
                let chkItems = new Object();
                chkItems['objects'] = object,
                    chkItems['labelCls'] = '',
                    chkItems['divCls'] = 'checkbox-inline'
                htmlText = this.getCheckBox(chkItems);
                break;
            case 'button':
                let btnItems = new Object();
                btnItems['objects'] = object,
                    btnItems['buttonCls'] = 'btn btn-primary',
                    btnItems['spanCls'] = 'form-group'
                htmlText = this.getButton(btnItems);
                break;
        }
        return htmlText;
    }
    createHTMLTag(objects, items) {
        let _this = this;
        let keys = Object.keys(objects);
        for (let j = 0; j < keys.length; j++) {

            let obj = objects[keys[j]];

            for (let index in obj) {
                if (typeof (obj[index]) == 'string' && obj[index] == 'textfield') {
                    
                    
                    let s = _this.setProperties(obj, items);
                    console.log( s );
                }
            }

        }

        return null;
    }
    setProperties(object, items) {
        let str = '';
        if (object.option) {
            // console.log( object.option );
            for(let index in object.option){
                str += index+'"'+object.option[index]+'"';
                // console.log( index, object.option[index] );
            }
            
            let txtItems = new Object();
            txtItems['placeholder'] = true,
                txtItems['divCls'] = 'form-group',
                txtItems['labelCls'] = '',
                txtItems['textfieldCls'] = 'form-control input-sm',
                txtItems['objects'] = items;
        }
        return str;
    }
}