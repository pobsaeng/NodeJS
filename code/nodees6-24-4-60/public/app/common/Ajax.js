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

function ajaxLoader(method, URL, data, ajaxCallback) {
	var xmlHttp = createXMLHttpRequest();

	xmlHttp.open(method, URL);
	if (method == "post") {
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			ajaxCallback(xmlHttp.responseText);

			delete xmlHttp;
			xmlHttp = null;
		}
	}
	xmlHttp.send(data);
}
function ajaxPromise(page) {
	return new Promise(function (resolve, reject) {
		var request = createXMLHttpRequest();
		request.open('GET', page);
		request.onload = function () {
			if (request.status == 200) {
				resolve(request.response);
			} else {
				reject(Error(request.statusText));
			}
		};
		request.onerror = function () {
			reject(Error("Error fetching data."));
		};
		request.send();
	});
}