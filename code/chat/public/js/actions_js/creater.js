function createDiv(txtEl, cssClass){
	var el = document.getElementById(txtEl)
	var div = document.createElement('div');
	div.className = cssClass;
	div.style = "margin-left: 20px;";
	var label = document.createElement("label");
	label.text = 'Hello';
	label.htmlFor =  "id2" ;
	
	var chk = document.createElement("input");
	chk.type = "checkbox";
	chk.id =  "chk";

	div.appendChild(chk);
	
	div.insertBefore(document.createTextNode("Hello"), label.childNodes[0]);
	el.insertBefore(div, el.childNodes[0]);
}

function createDivChild(opt){
	//removeChildEl(opt.txtEl);
	var txtEl = opt.txtEl,
		id = opt.id,
		textNode = opt.textNode != ''? opt.textNode:'',
		cssClass = opt.cssClass;
		
	var el = document.getElementById(txtEl);
	var div = document.createElement('div');
	div.className = cssClass;
	div.appendChild(document.createTextNode(textNode));
	div.id = id;
	el.appendChild(div);
}
function createTextInput(jsonData, displayFieldName){
	var record = [], i=0;
	for(var key in displayFieldName){
		if(displayFieldName.hasOwnProperty(key)){
			record[i] = {
			tag: 'input',
			type: 'text',
			required: true,
			id: key,
			placeholder: key,
			//value: jsonData[0][key],
			value: '',
			style: '',
			cssClass: 'form-control',
			render: 'txtFields'};
			i++;
		}
	}

	for(var j=0; j<record.length; j++){
		createTextField( record[j] );
	}
	
}

//===========================================================
function createTextField(opt){
	var tag = opt.tag,
		type = opt.type,
		id = opt.id,
		required = opt.required,
		placeholder = opt.placeholder,
		value = opt.value,
		style = opt.style,
		cssClass = opt.cssClass,
		render = opt.render;
		
	var tagDom = document.createElement(tag);
	tagDom.type = "text";
	tagDom.id = id;
	tagDom.value = value;
	tagDom.required = required;
	tagDom.placeholder = placeholder;
	if(tagDom.style != '') tagDom.style = style;
	if(cssClass != '') tagDom.className = cssClass;
	tagDom.appendChild(document.createTextNode(value));
	
	var renderEl = document.getElementById(render);
	renderEl.appendChild(tagDom);
	renderEl.appendChild(document.createElement("br"));
}
function createTextArea(opt){
	var id = opt.id,
		rows = opt.rows,
		cols = opt.cols,
		required = opt.required,
		placeholder = opt.placeholder,
		value = opt.value,
		style = opt.style,
		cssClass = opt.cssClass,
		render = opt.render;
		
	var tagDom = document.createElement('TEXTAREA');
	tagDom.id = id;
	tagDom.rows = rows;
	tagDom.cols = cols;
	tagDom.value = value;
	tagDom.required = required;
	tagDom.placeholder = placeholder;
	if(tagDom.style != '') tagDom.style = style;
	if(cssClass != '') tagDom.className = cssClass;
	tagDom.appendChild(document.createTextNode(value));
	
	var renderEl = document.getElementById(render);
	renderEl.appendChild(tagDom);
	renderEl.appendChild(document.createElement("br"));
}

function createCheckBox(opt){
	var id = opt.id,
		value = opt.value,
		checked = opt.checked,
		required = opt.required,
		placeholder = opt.placeholder,
		name = opt.name;
		style = opt.style,
		cssClass = opt.cssClass,
		render = opt.render;
	
	var tagDom = document.createElement('input');
	tagDom.type = "checkbox";
	tagDom.id = id;
	tagDom.name = name;
	tagDom.value = value;
	tagDom.checked = checked;
	tagDom.required = required;
	tagDom.placeholder = placeholder;
	if(tagDom.style != '') tagDom.style = style;
	if(cssClass != '') tagDom.className = cssClass;

	var renderEl = document.getElementById(render);
	renderEl.appendChild(tagDom);
	renderEl.appendChild(document.createElement("br"));
}
function addRow(tableID) {
	var table = document.getElementById(tableID);

	var element1 = document.createElement("input");
	element1.type = "checkbox";
	element1.id =  "id2" ;

	// Create label
	var label = document.createElement("label");
	label.for =  "id2" ;
	cell3.appendChild(element2);


}
function newTextBox(render){
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.value = "value";
	checkbox.id = "id";

	var label = document.createElement('label')
	label.htmlFor = "id";
	
	var renderEl = document.getElementById(render);
	renderEl.appendChild(checkbox);
	renderEl.appendChild(label);
	renderEl.appendChild(document.createElement("br"));
}
function createLI(el, txt, className) {
	var oElem = document.getElementById(el);			
	var oldNode = document.getElementsByTagName("li");		
	var newNode = document.createElement("li");
	newNode.className = className;
	var newText = document.createTextNode(txt);
	newNode.appendChild(newText);
	oElem.insertBefore(newNode, oldNode[0]);
}
function replaceLI(el, n, txt, className) {
	var oElem = document.getElementById(el);			
	var oldNode = document.getElementsByTagName("li");		
	var newNode = document.createElement("li");
	newNode.className = className;
	var newText = document.createTextNode(txt);
	oElem.replaceChild(newNode, oldNode[n]);
	newNode.appendChild(newText);
}
function createTag(name, attributes) {
	var node = document.createElement(name);
	if (attributes){
		for (var attr in attributes){
			if (attributes.hasOwnProperty(attr)){
				node.setAttribute(attr, attributes[attr]);
			}
		}  			
	}

	for (var i = 2; i < arguments.length; i++) {
		var child = arguments[i];
		if (typeof child == "string"){
			child = document.createTextNode(child);
			node.appendChild(child);
		}
	}
	return node;
}