class Component {
    constructor() { }
    getInputText(objects) {
        let tpl = new TemplateString();
        let template =
            // '<div class="form-group">' +
            '<% if(!this.labelDisable){ %>' +
            '<label class="<% this.labelCls %>" for="<% this.tagName %>" data-lang="{<% this.tagName %>}"></label>' +
            '<% } %>' +
            '<div class="<% this.divCls %>">' +
            '<input type="text" data-lang="{<% this.tagName %>}" id="<% this.tagName %>" name="<% this.tagName %>" <% if(!this.valueDisable){ %> value="<% this.value %>" <%}%> class="<% this.tagCls %>"' +
            '<% if(this.placeholder){ %> placeholder="{<% this.tagName %>}" <% } %> >' +
            // '</div>' +
            '</div>';

        let textInput = tpl.templateEngine(template, objects);
        return textInput;
    }
    getRadio(objects) {
        let tpl = new TemplateString();
        let template =
            // '<div class="form-group">' +
            '<div><label class="<% this.labelCls %>" for="<% this.tagName %>" data-lang="{<% this.tagName %>}"></label></div>' +
            '<div class="<% this.divCls %>">' +
            '<div class="<% this.tagCls %>">&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<label><input type="radio" value="<% this.value %>" id="<% this.tagName %>" name="<% this.tagName %>" checked=true>{male}</label>' +
            '</div>' +
            '<div class="<% this.tagCls %>">' +
            '<label><input type="radio" value="F" id="female" name="sex">{female}</label>' +
            '</div>' +
            '</div>' +
            // '</div>' +
            '</div>';

        let checkbox = tpl.templateEngine(template, objects);
        return checkbox;
    }
    getTextArea(objects) {
        let tpl = new TemplateString();
        let template =
            // '<div class="form-group">' +
            '<label class="<% this.labelCls %>" for="<% this.tagName %>" data-lang="{<% this.tagName %>}"></label>' +
            '<div class="<% this.divCls %>">' +
            '<textarea class="<% this.tagCls%>" id="<% this.tagName %>" name="<% this.tagName %>" rows="5"></textarea>' +
            // '</div>' +
            '</div>';

        let textarea = tpl.templateEngine(template, objects);
        return textarea;
    }

    getCheckBox(objects) {
        let tpl = new TemplateString();
        let template =
            // '<div class="form-group">' +
            '<div><label class="<% this.labelCls %>" for="<% this.tagName %>" data-lang="{<% this.tagName %>}"></label></div>' +
            '<div class="<% this.divCls %>">' +
            '<div class="<% this.tagCls %>">' +
            '<label><input type="checkbox" value="<% this.value %>" id="<% this.tagName %>" name="<% this.tagName %>" checked=true>{male}</label>' +
            '</div>' +
            '<div class="<% this.tagCls %>">' +
            '<label><input type="checkbox" value="F" id="female" name="sex">{female}</label>' +
            '</div>' +
            '</div>' +
            // '</div>' +
            '</div>';

        let checkbox = tpl.templateEngine(template, objects);
        return checkbox;
    }
    getEmail(objects) {
        let tpl = new TemplateString();
        let template =
            // '<div class="form-group">' +
            '<% if(!this.labelDisable){ %>' +
            '<label class="<% this.labelCls %>" for="<% this.tagName %>" data-lang="{<% this.tagName %>}"></label>' +
            '<% } %>' +
            '<div class="<% this.divCls %>">' +
            '<input type="email" data-lang="{<% this.tagName %>}" id="<% this.tagName %>" name="<% this.tagName %>" <% if(!this.valueDisable){ %> value="<% this.value %>" <%}%> class="<% this.tagCls %>"' +
            '<% if(this.placeholder){ %> placeholder="{<% this.tagName %>}" <% } %> >' +
            // '</div>' +
            '</div>';

        let textInput = tpl.templateEngine(template, objects);
        return textInput;
    }

    getButton(objects) {
        let tpl = new TemplateString();
        let template =
            '<div class="<% this.divCls %>">' +
            '<label class="<% this.labelCls %>" for="<% this.tagName %>"></label>&nbsp;&nbsp;' +
            '<% for(let index in this.btnGroup) { %>' +
            '<span">&nbsp;&nbsp;' +
            '<input type="submit" id="<% index %>" class="<% this.tagCls %>" value="<% this.btnGroup[index] %>">' +
            '</span>' +
            '<% } %> ' +
            '<div>';


        let button = tpl.templateEngine(template, objects);
        return button;
    }
}