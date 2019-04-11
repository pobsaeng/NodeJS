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
    getModal(objects) {
        let tpl = new TemplateString();

        let template =
            '<div class="modal-content col-sm-4 col-md-offset-4" id="myModal" style="position:absolute;z-index:999;">' +
            '<div class="modal-header">' +
            '<span id="myClose" class="close"><i class="fa fa-times" aria-hidden="true"></i></span>' +
            '<h5 class="modal-title"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</h5>' +
            '</div>' +
            '<div style="margin-top:5px;">' +
            this.getInputText(objects) +
            '</div>' +
            '<div class="modal-footer" style="border-top: 0px;">' +
            '<button type="button" class="btn btn-primary" id="btnSave">Save</button>' +
            '<button type="button" class="btn btn-warning" id="btnClose"data-dismiss="modal">Close</button>' +
            '</div>' +
            '</div>';
        return template;
    }
    setBlockModal(el) {
        var modal = document.getElementById(el);
        if (modal) {
            // var btn = document.getElementById("myBtn");
            var span = document.getElementById("myClose");
            modal.style.display = "block";
            span.onclick = function () {
                modal.style.display = "none";
            }

            document.getElementById("btnClose").addEventListener('click', function () {
                modal.style.display = "none";
            });
        }
    }
}