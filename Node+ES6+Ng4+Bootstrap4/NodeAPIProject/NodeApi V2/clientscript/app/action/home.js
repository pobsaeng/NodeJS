function initHome() {
    var option = {
        method: "GET",
        url: "http://localhost:8080/api/books",
        params: null,
        token: null
    };
    var me = this;
    document.getElementById("btnGetBooks").addEventListener("click", function () {
        me.getAjaxQuery(option, function (result) {
            console.log(result);
        });
    });
}
