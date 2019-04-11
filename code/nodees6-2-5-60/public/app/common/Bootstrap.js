class Bootstrap {
    setBlockModal(el) {
        var modal = document.getElementById(el);
        if (modal) {
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
    getModal(objects) {
        let comp = new Component();
        let tpl = new TemplateString();
        let template =
            '<div class="modal-content col-sm-4 col-md-offset-4" id="myModal" style="background-color:#f4f4f4; position:absolute;z-index:999;">' +
            '<div class="modal-header">' +
            '<span id="myClose" class="close"><i class="fa fa-times" aria-hidden="true"></i></span>' +
            '<h5 class="modal-title"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</h5>' +
            '</div>' +
            '<div style="margin-top:5px;">' +
            comp.getInputText(objects) +
            '</div>' +
            '<div class="modal-footer" style="border-top: 0px;">' +
            '<button type="button" class="btn btn-primary" id="btnSave">Save</button>' +
            '<button type="button" class="btn btn-warning" id="btnClose"data-dismiss="modal">Close</button>' +
            '</div>' +
            '</div>';
        return template;
    }
}