function createXMLHttpRequest() {
	var xmlHttp = null;
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		alert("Your browser doesn't support xmlHttp");
		return;
	}
	return xmlHttp;
}
function getAjaxQuery(option, callback) {
	$.ajax({
		type: option.method,
		contentType: "application/json",
		url: option.url,
		data: option.params,
		dataType: 'json',
		cache: false,
		timeout: 600000,
		headers: { "Authorization": option.token },
		success: function (data) {
			callback(data);
		},
		error: function (e) {
			console.log(e);
			callback(null);
		}
	});
}
function ajaxLoader(option, ajaxCallback) {
	var xmlHttp = createXMLHttpRequest();
	xmlHttp.open(option.method, option.url, true);

	if (option.headers != null && typeof option.headers != 'undefined') {
		// xmlHttp.setRequestHeadser("X-Requested-With","XMLHttpRequest");
		// xmlHttp.setRequestHeader({
		// 	"Content-Type": "application/json",
		// 	"Authorization": option.headers
		// });
		xmlHttp.setRequestHeader("Content-Type", "application/json");
		xmlHttp.setRequestHeader("Authorization", option.headers);

	} else {
		xmlHttp.setRequestHeader("Content-Type", "application/json");
	}
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState === 4) {
			ajaxCallback(xmlHttp.response);
			delete xmlHttp;
			xmlHttp = null;
		}
	};
	xmlHttp.send(option.params);
}
function getPageLoader(page, _callback) {
	var request = createXMLHttpRequest();
	request.open('GET', page);

	request.onload = function () {
		if (request.status == 200 && request.statusText == 'OK') {
			_callback(request.response);
		} else {
			_callback("Cannot load web page!");
		}
	};
	request.onerror = function () {
		_callback("Error fetching data.");
	};
	request.send();
}
function getHeaderPage() {

}
function getHtmlPage(page, callback) {
	var headPath = './app/views/tpl/header.html';

	var header_EL = document.getElementById("page-header");
	var content_EL = document.getElementById("page-content");

	//If it has header
	if (header_EL.childNodes.length > 0) {
		//Only content
		getPageLoader(page, function (resp) {
			content_EL.innerHTML = resp;
			callback(true);
		});
	} else {
		//Header & Content
		getPageLoader(headPath, function (resp) {
			header_EL.innerHTML = resp;

			getPageLoader(page, function (resp) {
				content_EL.innerHTML = resp;
				callback(true);
			});
		});
	}

}
function changeHTMLPage(path) {
	var htmlPath = './app/views/html/';
	path = htmlPath + path;

	var fileName = path.split('/').pop();
	console.log('(Current page) => [' + fileName + ']');

	if (path == null || path == undefined) {
		console.log('path is null or undefined!');
		return false;
	}

	var sp = path.split('/');
	var lastText = sp[sp.length - 1];
	var pageText = lastText.substring(0, lastText.indexOf('.')).toLowerCase();

	var defaultPage = 'login.html';
	//set pages here
	switch (pageText) {
		case "home":
			saveSysApp(fileName);
			getHtmlPage(path, function (status) {
				if (status) {
					initHome();
				}
			});

			break;
		case "login":
			// if (isLogin()) {
			// 	changeHTMLPage("profile.html");

			// } else {
			saveSysApp(fileName);
			getHtmlPage(path, function (status) {
				if (status) {
					initLogin();
				}
			});
			// }
			break;
		case "profile":
			saveSysApp(fileName);
			getHtmlPage(path, function (status) {
				if (status) {

				}
			});

			break;
		case "event":
			saveSysApp(fileName);
			getHtmlPage(path, function (status) {
				if (status) {

				}
			});

			break;
		case "table":
			saveSysApp(fileName);
			getHtmlPage(path, function (status) {
				if (status) {

				}
			});

			break;
		case "webstorage":
			saveSysApp(fileName);
			getHtmlPage(path, function (status) {
				if (status) {

				}
			});
			break;

		default:
			changeHTMLPage(defaultPage);
	}
}
//save current page to sessionstore
function saveSysApp(fileName) {
	var SysAppConfig = sessionStorage.getItem('SysAppConfig');

	if (SysAppConfig != null) {
		SysAppConfig = JSON.parse(SysAppConfig);
		SysAppConfig.currpage = fileName;
		sessionStorage.setItem('SysAppConfig', JSON.stringify(SysAppConfig));

	} else {
		sessionStorage.setItem('SysAppConfig', JSON.stringify({ currpage: fileName }));
	}
}
//Start event here!!
window.onload = function () {
	var SysAppConfig = sessionStorage.getItem('SysAppConfig');
	if (SysAppConfig != null) {
		changeHTMLPage(SysAppConfig.currpage);
	} else {
		changeHTMLPage("login.html");
	}
};
