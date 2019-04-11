function onCellClick(el, col, callback){
	var table = document.getElementById(el);
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
			//table.rows[i].cells[0].onclick = function(row){}
			if(col !== null){
				table.rows[i].cells[col].onclick = function (row) {
				if (table.rows[i].rowIndex == 0) return;
			
					return function () { callback(this); };
					
				}(table.rows[i]);
			}else{
				table.rows[i].cells[j].onclick = function (row) {
				if (table.rows[i].rowIndex == 0) return;
			
					return function () { callback(this); };
					
				}(table.rows[i]);
			}
            
        }
    }
}
function onRowClick(tableId, callback) {
    var table = document.getElementById(tableId),
        rows = table.getElementsByTagName("tr"),
        i;
    for (i = 0; i < rows.length; i++) {
        table.rows[i].onclick = function (row) {
			if (table.rows[i].rowIndex == 0) return;
            return function () {
                callback(row);
            };
        }(table.rows[i]);
    }
};

function mouseOverRecord(el, callback){
	var table = document.getElementById(el);
	var rows = document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		//row mouse over
		rows[i].onmouseover = function (row) {
			if (table.rows[i].rowIndex == 0) return;
			
			//var oDiv = table.rows[i].getAttribute("title");
			//console.log( oDiv );
			//console.log(this.innerHTML);
			 return function () {
				 var rec = recordToJson(table, row)[0];
				 var txt = ' รหัส : '+rec.id+'\n ชื่อหนังสือ : '+rec.title+'\n ชื่อผู้แต่ง : '+rec.authors+'\n ราคา : '+rec.price+'\n จำนวน : '+rec.stock;
				
				
				this.setAttribute('title', txt);
				
				 
                callback(recordToJson(table, row));
            };
		}(table.rows[i]);
		//cell mouse over
		for(var j=0; j<rows[i].cells.length; j++){rows[i].cells[j].onmouseover = function () {};}
		
	  rows[i].addEventListener("mouseover", function(e) {
		  //this.style.backgroundColor = "green";
		  //showTip('myTable');
		  //alternate(el);
		   //var posX = e.clientX;
		   //var posY = e.clientY;
		   //console.log(posX, posY);
		   //showToolTip(e);
	  });

	  rows[i].addEventListener("mouseout", function() {
		  //this.style.backgroundColor = "none";
		  //hideTip('myTable');
		  //alternate(el);
		  //var tooltip = document.querySelectorAll('.coupontooltip');
		  //for (var i=tooltip.length; i--;) {
		  //tooltip[i].style.display = 'none';
		  //}
	  });
	}
}

function tableSelected(el) {
	var table = null;
	//el = string or empty
	if(typeof el === 'string' || typeof el == "undefined"){
		table = document.getElementById(el);
	}

	var data = [];
	var value = '';
    var rows = table.rows;
    for (var i=0; i<rows.length; i++) {
        rows[i].onclick = function (e) {
            if (this.rowIndex == 0) return;//header

            var cells = this.cells;

			for(var c=0; c<cells.length; c++){
				var v = cells[c].textContent;
				//if(v == 'id'|| v == 'title' || v == 'id' || v == 'id') return;
				value += removeHtml(cells[c].innerHTML)+', ';
			}

			console.log(recordToJson(table, this));
        };
    }
}
function recordToJson(table, rows) {
	var data = []; 
	var headers = []; // first row needs to be headers 
	for (var i=0; i<table.rows[0].cells.length; i++) {

		//attribute name or header text
		var atId = table.rows[0].cells[i].getAttribute('id');
		if(atId != null){
			headers[i] = table.rows[0].cells[i].getAttribute('id');
			
		}else{
			headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,''); 
		}
	} 
	
	var rowData = {};
	for (var j=0; j<rows.cells.length; j++) {
		rowData[ headers[j] ] = removeHtml( rows.cells[j].innerHTML ); 
	} 
	data.push(rowData);//json to array
	return data; 
}

function rowToJson(tr, head) {
	var data = []; 
	var headers = [];
	for (var i=0; i<head.length; i++) {
		headers[i] = head[i];
	} 
	
	var rowData = {};
	for (var j=0; j<tr.cells.length; j++) {
		rowData[ headers[j] ] = removeHtml( tr.cells[j].innerHTML ); 
	} 
	data.push(rowData);//json to array
	return data; 
}
function getHeader(items){
	var fields = [], i = 0;;
	for(var key in items){
		fields[i] = key;
		i++;
	}
	return fields;
}
function tableToJson(el) { 
	var table = document.getElementById(el);
	var data = []; // first row needs to be headers 
	var headers = []; 
	for (var i=0; i<table.rows[0].cells.length; i++) {
		//attribute name or header text
		var atId = table.rows[0].cells[i].getAttribute('id');
		if(atId != null){
			headers[i] = table.rows[0].cells[i].getAttribute('id');
			
		}else{
			headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,''); 
		}
	} 
	// go through cells 
	for (var i=2; i<table.rows.length; i++) { 
		var tableRow = table.rows[i]; var rowData = {}; 
		for (var j=0; j<tableRow.cells.length; j++) {
			rowData[ headers[j] ] = removeHtml( tableRow.cells[j].innerHTML ); 
		} 
		data.push(rowData); 
	} 
	return data; 
}

function getRows(el){
	var t = document.getElementById(el);
    for(var i=0;i<t.rows.length;i++) {
		var tr = t.getElementsByTagName("tr")[i];
		var th = tr.getElementsByTagName("th");
		
		if(th.length > 0){
			for(var c=0; c<tr.cells.length; c++){
				//console.log(tr.cells[c].textContent);
			}
			
		}else{
			for(var a=0; a<tr.cells.length; a++){
				//console.log(tr.cells[a].textContent);
			}
		}
	}
}
function removeHtml(html){
   var tmp = document.implementation.createHTMLDocument("New").body;
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function alternate(el){ 
	var table = null;
	if(typeof el === 'string' || typeof el == "undefined"){
		table = document.getElementById(el);
	}
    var rows = table.getElementsByTagName("tr");   
    for(i = 0; i < rows.length; i++){           
      if(i % 2 == 0){
        rows[i].className = "even"; 
      }else{
        rows[i].className = "odd"; 
      }       
    }
}

function makeTable(items, opt){
	var table = document.createElement('TABLE');
	table.id = opt.id;
	for(var i=0; i<opt.tableCss.length; i++)
		table.className += opt.tableCss[i]+' ';
	
	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);
	
	var fields=[], c=0;
	//Fields
	for(var key in items[0]){
		fields[c] = key;
		c++;
	}

	var f=0;
	var tr = document.createElement('TR');
	tr.style.backgroundColor = "#f0f0f0";
	tableBody.appendChild(tr);
	
	//custom fields for display
	if(opt.fieldsDisplay.length > 0){
		console.log('-- custom fields --');
		//==Cols Header==
		for(var key in items[0]){

			for(var u=0; u<opt.fieldsDisplay.length; u++){
				//set header and has display fields
				if(key.indexOf( opt.fieldsDisplay[u]) != -1 && opt.header.hasOwnProperty(key)){
					var th = document.createElement('TH')
					th.appendChild(document.createTextNode( opt.header[key] ));
					tr.appendChild(th);
					
				}else{
					//not set header but has display fields
					if(key.indexOf( opt.fieldsDisplay[u]) != -1){
						var th = document.createElement('TH')
						th.appendChild(document.createTextNode( key ));
						tr.appendChild(th);
					}
				}
			}
		}

		//==Rows==
		for (i = 0; i < items.length; i++) {
			var tr = document.createElement('TR');
			for(var j=0; j<opt.fieldsDisplay.length; j++){
				var td = document.createElement('TD');
				td.appendChild(document.createTextNode( items[i][ fields[j] ] ));
				tr.appendChild(td);
			}
			tableBody.appendChild(tr);
		}
		
	}else{
		//all fields
		console.log('-- all fields --');
		//Cols Header
		for(var key in items[0]){
			//define columns header
			if(opt.header.hasOwnProperty(key)){
				var th = document.createElement('TH')
				th.appendChild(document.createTextNode( opt.header[key] ));
				tr.appendChild(th);
			}else{
				//all columns header
				var th = document.createElement('TH')
				th.appendChild(document.createTextNode( key ));
				tr.appendChild(th);
			}
		}

		//==Rows==
		for (i = 0; i < items.length; i++) {
			var tr = document.createElement('TR');
			for(var j=0; j<fields.length; j++){
				var td = document.createElement('TD');
				td.className = '';
				
				if(fields[j]=='id'){
					//td.innerHTML = '<a href="#" onclick="getEdit('+items[i][ fields[j] ]+')">'+items[i][ fields[j] ]+'</a>';
					//td.setAttribute('data-content', items[i][ fields[j] ]);
					td.appendChild(document.createTextNode( items[i][ fields[j] ] ));
					//td.innerHTML = '<span title="">'+items[i][ fields[j] ]+'</span>';
				}else{
					//td.setAttribute('data-content', items[i][ fields[j] ]);
					td.appendChild(document.createTextNode( items[i][ fields[j] ] ));
					//td.innerHTML = '<span title="">'+items[i][ fields[j] ]+'</span>';
				}
				
				//td.appendChild(document.createTextNode( items[i][ fields[j] ] ));
				tr.appendChild(td);
			}
			tableBody.appendChild(tr);
		}
	}
	  
	opt.el.appendChild(table)
}

function insertRow(el, n){
	var table = document.getElementById(el);
	var row = table.insertRow(table.rows.length);
	var cellLeft = row.insertCell(n);
	var textNode = document.createTextNode( table.lastRow );
	cellLeft.appendChild( textNode );
}
function insertCell(tr, text) {
	var td = document.createElement('td');
	var content = document.createTextNode(text);
	td.appendChild(content);
	tr.appendChild(td);
	return tr;
}
function createCell(el, tr, text) {
	var td = document.createElement('td');
	var content = document.createTextNode(text);
	td.appendChild(content);
	tr.appendChild(td);
	document.querySelectorAll('#'+el+' tbody')[0].appendChild(tr);
}
function insertLastRow(el, text) {
	var table = document.getElementById(el);
	var td = document.createElement('td');
	var content = document.createTextNode(text);
	td.appendChild(content);
	var tr = document.createElement('tr');
	tr.appendChild(td);
	
	document.querySelectorAll('#'+el+' tbody')[0].appendChild(tr);
}

