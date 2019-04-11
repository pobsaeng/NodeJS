function noneEl(el){
	el.style.display = 'none';
}
function blockEl(el){
	el.style.display = 'block';
}

function removeChildEl(el){
	var element = document.getElementById(el);
	if(element != null){
		while (element.hasChildNodes()) {
			element.removeChild(element.lastChild);
		}
	}else{
		console.log('element is null!');
	}
}
function searchNode(node, string) {
  if (node.nodeType == document.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if (searchNode(node.childNodes[i], string))
        return node.childNodes[i];
    }
    return false;
  } else if (node.nodeType == document.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}
function removeChildTable(){
	var tables = document.getElementsByTagName("TABLE");
	for (var i = tables.length-1; i >= 0; i--)
	if (tables[i]){ tables[i].parentNode.removeChild(tables[i]); }
}
function getJsonForm(el) {
	var frm = document.getElementById(el);  
	if(frm == null){
		console.log("form not found!"); 
		return;
	}
	var json = '{';
	for(var i=0; i<frm.elements.length; i++) {
		var el = frm.elements[i];
		if(el.name == "" && el.id == "") continue;
		
		var type = frm.elements[i].type;

		if(type == "text" || type == "password" || type == "hidden" || type == "textarea") {
			json += '"'+el.id+'":"'+el.value+'",';
			
		}else if(type == "radio" || type == "checkbox") {
			if(el.checked) {
				json += '"'+el.id+'":"'+el.value+'",';
			}else { 
				//json += '"'+el.id+'":"",';
				continue; 
			}
			
		}else if(type == "select-one") {
			json += '"'+el.id+'":"'+el.value+'",';
			
		}
		if(type == "select-multiple") {
			var data = '';
			json += '"'+el.id+'":"';
			
			for(j=0; j<el.length; j++) {
				if(el.options[j].selected){
					data += el.options[j].value+',';
				}
			}
			if(data.length == 0){
				json += ',';
			}else{
				json += data;
			}
			
			json = json.substring(0, json.length - 1);
			json += '",';
			continue;
		}
	}
	json = json.substring(0, json.length - 1);
	json += "}";
	json = JSON.parse(json);
	return json;
}
function getJson(el) {
	var frm = document.getElementById(el);  
	if(frm == null){
		console.log("form not found!"); 
		return;
	}
	var object = {};
	for(var i=0; i<frm.elements.length; i++) {
		var el = frm.elements[i];
		if(el.name == "" && el.id == "") continue;
		
		var type = frm.elements[i].type;

		if(type == "text" || type == "password" || type == "hidden" || type == "textarea") {
			object[el.id] = el.value;
			
		}else if(type == "radio" || type == "checkbox") {
			if(el.checked) {
				object[el.id] = el.value;
			}else { 
				continue; 
			}
			
		}else if(type == "select-one") {
			object[el.id] = el.value;
		}else if(type == "select-multiple") {
			var data = '';
			for(j=0; j<el.length; j++) {
				if(el.options[j].selected){
					data += el.options[j].value + ',';
				}
			}
			
			if(data.length == 0){
				data = '';
				object[el.id] = data;
			}else{
				data = data.substring(0, data.length - 1);
				object[el.id] = data;
			}
			continue;
		}
	}
	return object;
}
function stringCompare(items, _key){
	for(var i=0; i<items.length; i++){
		for(var key in items[i]){
			if(_key == key){
				return i;
			}
		}
	}
	return -1;
}

function setJson(el, items) {
	var frm = document.getElementById(el);  
	if(frm == null){
		console.log("form not found!"); 
		return;
	}
	var object = {};
	for(var i=0; i<frm.elements.length; i++) {
		var el = frm.elements[i];
		if(el.name == "" && el.id == "") continue;
		
		var type = frm.elements[i].type;

		if(type == "text") {
			var index = stringCompare(items, el.id);
			if(index != -1){
				document.getElementById(el.id).value = items[index][el.id]; 
			}
			
		}else if(type == "textarea"){
			var index = stringCompare(items, el.id);
			if(index != -1){
				document.getElementById(el.id).value = items[index][el.id]; 
			}

		}
		else if(type == "radio" || type == "checkbox") {
			if(el.checked) {
				document.getElementById(el.id).checked = true; 
			}else { 
				continue; 
			}
			
		}else if(type == "select-one") {
			object[el.id] = el.value;
		}else if(type == "select-multiple") {
			
			//el.options[j]
			continue;
		}
	}
	return object;
}

function clearInputText(el) {
	var frm = document.getElementById(el);  
	if(frm == null){
		console.log("form not found!"); 
		return;
	}
	var object = {};
	for(var i=0; i<frm.elements.length; i++) {
		var el = frm.elements[i];
		if(el.name == "" && el.id == "") continue;
		
		var type = frm.elements[i].type;

		if(type == "text" || type == "password" || type == "hidden" || type == "textarea") {
			document.getElementById(el.id).value = ''; 
			
		}else if(type == "radio" || type == "checkbox") {
			//document.getElementById(el.id).checked = false; 
			
		}else if(type == "select-one") {
			document.getElementById(el.id).selected = false; 
			
		}else if(type == "select-multiple") {
			for (var i = 0, l = el.options.length; i < l; i++) {
				el.options[i].selected = el.options[i].defaultSelected;
			}
		}
	}
	return object;
}

var tipMessage = "The content of the tooltip...";
function showTip(el){
	var div = document.getElementById('tooltip');
	var fadeSpeed = 300; 
    var tip = document.createElement(el);
    tip.className = "tooltip";
    tip.id = "tip";
    tip.innerHTML = tipMessage;
    div.appendChild(tip);
    tip.style.opacity="0"; // to start with...
    var intId = setInterval(function(){
        var newOpacity = parseFloat(tip.style.opacity)+0.1;
        tip.style.opacity = newOpacity.toString();
        if(tip.style.opacity == "1"){
            clearInterval(intId);
        }
    }, fadeSpeed);
}
function hideTip(el){
	var fadeSpeed = 300;
    var tip = document.getElementById('tooltip');
    var intId = setInterval(function(){
        var newOpacity = parseFloat(tip.style.opacity)-0.1;
        tip.style.opacity = newOpacity.toString();
        if(tip.style.opacity == "0"){
            clearInterval(intId);
            tip.innerHTML = '';
        }
    }, fadeSpeed);
    tip.innerHTML = '';
}
function showToolTip(e) {
	var tip = document.querySelectorAll('.coupontooltip');
		
	var fadeSpeed = 300; 
    //var tip = document.createElement('.coupontooltip');
    tip.className = "coupontooltip";
    tip.id = "tip";
    tip.innerHTML = "555555555555";
    //div.appendChild(tip);
    //tip.style.opacity="0"; // to start with...
    //var intId = setInterval(function(){
		for (var i=tip.length; i--;) {
			tip[i].style.display = 'block';
			tip[i].style.left = e.pageX + 'px';
			tip[i].style.top = e.pageY + 'px';
		}
	//	clearInterval(intId);
    //}, fadeSpeed);
}
function addClass(id, className){
   var i, n = 0;
   className = className.split(",");

   for(i=0; i<className.length; i++){
	   if((" "+document.getElementById(id).className+" ").indexOf(" "+className[i]+" ") == -1){
		   document.getElementById(id).className+=" "+className[i];
		   n++;
	   }
   }
   return n;
}
function removeClass(id, className){
   var i, n = 0;
   className = className.split(",");

   for(i=0; i<className.length; i++){
	   if(document.getElementById(id).className.indexOf(" "+className[i]+" ") != -1){
		   document.getElementById(id).classList.remove( className[i].trim() );
		   n++;
	   }
   }
   return n;
}