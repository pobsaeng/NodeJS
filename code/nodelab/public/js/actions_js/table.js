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
// append row to the HTML table
function appendRow() {
    var tbl = document.getElementById('my-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }
}
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}
// append column to the HTML table
function appendColumn(el) {
    var tbl = document.getElementById(el), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}
// delete table rows with index greater then 0
function deleteRows(el) {
    var tbl = document.getElementById(el), // table reference
        lastRow = tbl.rows.length - 1,             // set the last row index
        i;
    // delete rows with index greater then 0
    for (i = lastRow; i > 0; i--) {
        tbl.deleteRow(i);
    }
}
 
// delete table columns with index greater then 0
function deleteColumns(el) {
    var tbl = document.getElementById(el), // table reference
        lastCol = tbl.rows[0].cells.length - 1,    // set the last column index
        i, j;
    // delete cells with index greater then 0 (for each row)
    for (i = 0; i < tbl.rows.length; i++) {
        for (j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }
}
function mySaveContent (tbl, type) {
    var query = '',      // define query parameter
        tbl_start,       // table loop starts from tbl_start parameter
        tbl_end,         // table loop ends on tbl_end parameter
        tbl_rows,        // number of table rows
        cells,           // number of cells in the current row
        tbl_cell,        // reference to the table cell
        cn,              // reference to the child node
        id, r, c, d, i,  // variables used in for loops
        inputField,      // input field reference inside DIV element
        JSONarray,       // array of values for JSON object
        JSONobj = [],    // prepare JSON object
        pname = REDIPS.drag.saveParamName; // set parameter name (default is 'p')
    // if input parameter is string, then set reference to the table
    if (typeof(tbl) === 'string') {
        tbl = document.getElementById(tbl);
    }
    // tbl should be reference to the TABLE object
    if (tbl !== undefined && typeof(tbl) === 'object' && tbl.nodeName === 'TABLE') {
        // define number of table rows
        tbl_rows = tbl.rows.length;
        // iterate through each table row
        for (r = 0; r < tbl_rows; r++) {
            // set the number of cells in the current row
            cells = tbl.rows[r].cells.length;
            // iterate through each table cell
            for (c = 0; c < cells; c++) {
                // set reference to the table cell
                tbl_cell = tbl.rows[r].cells[c];
                // if cells is not empty (no matter is it allowed or denied table cell) 
                if (tbl_cell.childNodes.length > 0) {
                    // cell can contain many DIV elements
                    for (d = 0; d < tbl_cell.childNodes.length; d++) {
                        // set reference to the child node
                        cn = tbl_cell.childNodes[d];
                        // childNode should be DIV with containing drag class name
                        // and yes, it should be uppercase
                        if (cn.nodeName === 'DIV' && cn.className.indexOf('drag') > -1) {
                            // prepare query string
                            query += pname + '[]=' + cn.id + '_' + r + '_' + c;
                            // initialize JSONarray array
                            JSONarray = [cn.id, r, c];
                            // try to find input elements inside DIV element
                            inputField = cn.getElementsByTagName('input');
                            // loop goes through all found input elements
                            for (i = 0; i < inputField.length; i++) {
                                query += '_' + inputField[i].value;
                                JSONarray.push(inputField[i].value);
                            }
                            // add '&' to the data set
                            query += '&';
                            // push values for DIV element as Array to the Array
                            JSONobj.push(JSONarray);
                        }
                    }
                }
            }
        }
        // prepare query string in JSON format (only if array is not empty)
        if (type === 'json' && JSONobj.length > 0) {
            query = JSON.stringify(JSONobj);
        }
        else {
            // cut last '&' from query string
            query = query.substring(0, query.length - 1);
        }
    }
    // return prepared parameters (if tables are empty, returned value could be empty too) 
    return query;
};