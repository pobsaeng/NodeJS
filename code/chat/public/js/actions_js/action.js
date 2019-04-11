function ajaxProcess(callName, method, callback) {
	 var xmlhttp;
	 if (window.XMLHttpRequest) { 
		xmlhttp = new XMLHttpRequest();
	 }else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	 }

	 xmlhttp.onreadystatechange = function() {
	  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		if (callback) { callback(xmlhttp); }
	  }
	 }
	 xmlhttp.open(method, window.location.protocol + callName, true);
	 xmlhttp.send();
}

var tableCss = ['table','table-condensed','table-bordered','table-hover'];
var customerHeader = { id : 'รหัส', name : 'ชื่อ-สกุล', address : 'ที่อยู่', email : 'อีเมล์', phone : 'โทรศัพท์' };
var bookHeader = { id : 'รหัส', title : 'ชื่อหนังสือ', authors : 'ผู้แต่ง', price : 'ราคา', stock : 'จำนวณ' };
var fieldsDisplay = ['id', 'name', 'phone'];

function displayTable(){
	var myTableDiv = document.getElementById("container");
	removeChildEl('txtFields');
	removeChildTable(myTableDiv);
	
	var option = {
		id:'myTable',
		el: myTableDiv, 
		fieldsDisplay: [], 
		header: [], 
		tableCss: tableCss 
	};
	
	ajaxProcess('/getcustomers', 'GET', function(xmlhttp) {
		var result = JSON.parse( xmlhttp.responseText );	 
		var items = result.data;

		createTextInput( items, bookHeader );
		makeTable(items, option); // generate table
		//console.log( tableToJson('myTable') );
		//tableSelected('myTable');
		alternate('myTable');
					
		onRowClick("myTable", function (row){
			var table = document.getElementById("myTable");
			var record = recordToJson(table, row);
			var value = '';
			value += record[0].id +',';
			value += record[0].title +',';
			value += record[0].authors +',';
			value += record[0].price +',';
			value += record[0].stock;
			alert(value);
		});

		mouseOverRecord("myTable", function (record){ 
			document.getElementById('id').value = record[0].id;
			document.getElementById('title').value = record[0].title;
			document.getElementById('authors').value = record[0].authors;
			document.getElementById('price').value = record[0].price;
			document.getElementById('stock').value = record[0].stock;
		});
	});
}

var c = 0;
function getDiv(){
	var textName = "Check"+c;
	c++;
	var opt = {
		value: c,
		name: textName,
		checked: true,
		required: true,
		id: textName,
		placeholder: textName,
		value: '',
		style: '',
		cssClass: '',
		render: 'txtFields'};

	createDiv('txtFields', 'checkbox');
}
function createTr(){
	var table = document.getElementById("myTable");
	
	for (var i = 0; i < 5; i++) {
		var tr = document.createElement('tr');
		createCell(i, tr, 'a');		
		document.querySelectorAll('#myTable tbody')[0].appendChild(tr);
  }
}

function getEdit(id){
	//alert(id);
}
function getAddRecordToTable(formEl, tableEl){
	var items = [];
	items[0] = getJson(formEl);
	
	for(var i=0; i<items.length; i++){
		var table = document.getElementById(formEl);
		var tr = document.createElement('tr');

		var c=0;
		for(var key in items[0]){
			createCell(tableEl, tr, items[0][key]);
		}		
	}
	clearInputText(formEl);
	onRowClick(tableEl, function (row){
		var table = document.getElementById(tableEl);
		var record = recordToJson(table, row);
		setJson('myFormGender', record);
	});
}
function getTableToJson(el){
	//tableToJson(el);
	var json = tableToJson(el);
	console.log(json);
}
function getForm(){
	console.log(duplicateArray(['a','b','a']) );
	var myTableDiv = document.getElementById("container");
	
	var option = { 
		el: myTableDiv, 
		fieldsDisplay: [], 
		header: [], 
		tableCss: tableCss 
	};
	var items = [];
	//for(var i=0; i<10; i++){
		items[0] = getJsonForm("myFromInput");
	//}
	console.log( items );
	//makeTable(items, option);
	
	for(var i=0; i<5; i++){
		var table = document.getElementById('myTable');
		var tr = document.createElement('tr');
		
		for(var j=0; j<5; j++){
			createCell('myTable', tr, 'Cell '+(j+i));
		}
	}
	
	mouseOverRecord("myTable", function (record){
		document.getElementById('id').value = record[0].id;
		document.getElementById('title').value = record[0].title;
		document.getElementById('authors').value = record[0].authors;
		document.getElementById('price').value = record[0].price;
		document.getElementById('stock').value = record[0].stock;
	});
	onRowClick("myTable", function (row){
		var table = document.getElementById("myTable");
		var record = recordToJson(table, row);
		var value = '';
		value += record[0].id +',';
		value += record[0].title +',';
		value += record[0].authors +',';
		value += record[0].price +',';
		value += record[0].stock;
		alert(value);
	});
	//onCellClick("myTable", 0, function (cell){ alert( cell.innerHTML ); });
}