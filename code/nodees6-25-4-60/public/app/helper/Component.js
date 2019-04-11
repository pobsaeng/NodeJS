class Component {
    constructor() { }
    getInputText(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div style="margin-bottom:5px;" class="<% this.divCls %>">' +
            '<label data-lang="{<% index %>}"> <% index %> </label>' +
            '<input type="text" id="<% index %>" name="<% index %>" value="<% this.objects[index] %>" class="<% this.inputCls %>">' +
            '</div>' +
            '<% } %>';

        let textInput = tpl.templateEngine(template, {
            objects: objects,
            divCls: '',
            inputCls: 'form-control input-sm'
        });
        return textInput;
    }
    getRadio(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div class="<% this.cls %>">' +
            '<label>' +
            '<input type="radio" value="<% this.objects[index] %>" id="<% index %>" name="<% index %>" data-lang="{<% index %>}">' +
            '<% index %>' +
            '</label>' +
            '</div>' +
            '<% } %>';

        let radio = tpl.templateEngine(template, {
            objects: objects,
            cls: 'radio-inline'
        });
        return radio;
    }
    getCheckBox(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div class="<% this.cls %>">' +
            '<label>' +
            '<input type="checkbox" value="<% this.objects[index] %>" id="<% index %>" name="<% index %>" data-lang="{<% index %>}">' +
            '<% index %>' +
            '</label>' +
            '</div>' +
            '<% } %>';

        let checkbox = tpl.templateEngine(template, {
            objects: objects,
            cls: 'checkbox-inline'
        });
        return checkbox;
    }
    getEmail(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<div class="<% this.clsFormGroup %>">' +
            '<label data-lang="{<% index %>}"></label>' +
            '<input type="email" class="<% this.clsFormControl %>" id="<% index %>" name="<% index %>">' +
            '</div>' +
            '<% } %>';
        let email = tpl.templateEngine(template, {
            objects: objects,
            clsFormControl: 'form-control',
            clsFormGroup: 'form-group'
        });
        return email;
    }

    getButton(objects) {
        let tpl = new TemplateString();
        let template =
            '<% for(let index in this.objects) { %>' +
            '<span class="<% this.clsFormGroup %>">' +
            '<input type="submit" id="btnAdd" class="<% this.clsBtnControl %>" data-lang="{<% index %>}" value="{<% index %>}">' +
            '</span>'+
            '<% } %>';
        let button = tpl.templateEngine(template, {
            objects: objects,
            clsBtnControl: 'btn btn-primary',
            clsFormGroup: 'form-group'
        });
        return button;
    }

}