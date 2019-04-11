function isLogin() {
    var status = false;
    var SysAppConfig = sessionStorage.getItem('SysAppConfig');

    if (SysAppConfig != null) {
        SysAppConfig = JSON.parse(SysAppConfig);
        if (SysAppConfig.login) {
            status = true;
        } else {
            status = false;
        }

    } else {
        status = false;
    }
    return status;
}
function tokenVerify() {
    var SysAppConfig = JSON.parse(sessionStorage.getItem('SysAppConfig'));
    var option = {
        method: "POST",
        url: "http://localhost:8080/api/verify",
        params: "",
        token: SysAppConfig.token
    };
    this.getAjaxQuery(option, function (data) {
        console.log(data);
    });
}
function login() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    if (username == "" || username == "") {
        showErrorMsg("block");
        return;
    }
    var params = {
        username: username, password: password,
    };
    var option = {
        method: "POST",
        url: "http://localhost:8080/api/signin",
        params: JSON.stringify(params),
        token: null
    };
    this.getAjaxQuery(option, function (result) {
        console.log(result);
        if (!result.exception && result.status) {
            var SysAppConfig = sessionStorage.getItem('SysAppConfig');
            if (SysAppConfig != null) {
                SysAppConfig = JSON.parse(SysAppConfig);
                SysAppConfig.login = true;
                SysAppConfig.token = result.token;
                sessionStorage.setItem('SysAppConfig', JSON.stringify(SysAppConfig));

                changeHTMLPage("home.html");
                showErrorMsg("none");//hide
            }
        } else {
            showErrorMsg("block"); //show
        }
    });
}
function initLogin() {
    showErrorMsg("none");

    var me = this;
    document.getElementById("btnLogin").addEventListener('click', function () {
        me.login();
    });
    document.getElementById("btnToken").addEventListener('click', function () {
        me.tokenVerify();
    });
}
// function initLogin() {
// showErrorMsg("none");

// var me = this;
// document.getElementById("btnLogin").addEventListener('click', function () {
// var username = document.getElementById('username').value.trim();
// var password = document.getElementById('password').value.trim();
// if (username == "" || username == "") {
//     showErrorMsg("block");
//     return;
// }

// var params = {};
// params.username = username;
// params.password = password;

// var option = {
//     method: "post",
//     url: "http://localhost:8080/api/signin",
//     params: JSON.stringify(params)
// };
// me.ajaxLoader(option, function (data) {
//     console.log(data);

//     var result = JSON.parse(data);

//     if (!result.exception && result.status) {
//         var SysAppConfig = sessionStorage.getItem('SysAppConfig');
//         if (SysAppConfig != null) {
//             SysAppConfig = JSON.parse(SysAppConfig);
//             SysAppConfig.login = true;
//             SysAppConfig.token = result.token;
//             sessionStorage.setItem('SysAppConfig', JSON.stringify(SysAppConfig));

//             changeHTMLPage("home.html");
//             showErrorMsg("none");//hide
//         }
//     } else {
//         showErrorMsg("block"); //show
//     }
// });
// });

// document.getElementById("btnToken").addEventListener('click', function () {
//     me.tokenVerify();
// });

// }

// function sendData() {
//     var username = document.getElementById('username').value.trim();
//     var password = document.getElementById('password').value.trim();

//     var data = {};
//     data.username = username;
//     data.password = password;

//     $.ajax({
//         type: 'POST',
//         data: JSON.stringify(data),
//         contentType: 'application/json',
//         url: 'http://172.20.10.3:8080/signin',
//         success: function (data) {
//             console.log('success');
//             console.log(JSON.stringify(data));
//         }
//     });
// }
// function register() {
//     var username = document.getElementById('username').value.trim();
//     var password = document.getElementById('password').value.trim();

//     var params = {};
//     params.username = username;
//     params.password = password;

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "http://localhost:8080/api/signin", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             // var msg = JSON.parse(xhr.responseText);
//             console.log(typeof (xhr.responseText));

//             var result = xhr.responseText;
//             if (!result.exception && result.status) {
//                 var SysAppConfig = sessionStorage.getItem('SysAppConfig');
//                 if (SysAppConfig != null) {
//                     SysAppConfig = JSON.parse(SysAppConfig);
//                     SysAppConfig.login = true;
//                     SysAppConfig.token = result.token;
//                     sessionStorage.setItem('SysAppConfig', JSON.stringify(SysAppConfig));

//                     changeHTMLPage("home.html");
//                     showErrorMsg("none");//hide
//                 }
//             } else {
//                 showErrorMsg("block"); //show
//             }
//         }
//     };
//     xhr.send(JSON.stringify(params));
// }
function showErrorMsg(status) {
    var x = document.getElementById("errorMsg");
    x.style.display = status;
}