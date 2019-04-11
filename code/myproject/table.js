class Table {
	constructor(option) {
		this.el = option.el;
		this.lastRow = option.lastRow + 1;
		this.row = option.row;
		this.input = option.input;
	}  
	insertRow(){
		let cellLeft = this.row.insertCell(0);
		let textNode = document.createTextNode( this.lastRow );
		cellLeft.appendChild( textNode );

		let cellRight = this.row.insertCell(1);
		let textNode2 = document.createTextNode( this.input );
		cellRight.appendChild( textNode2 );
	}
	deleteRows() {
		if (this.lastRow > 1){
			let rowIndex = this.el.rows.length - 1;
			this.el.deleteRow( parseInt( rowIndex ) );
		}
	}
}

function getOptions(){
	let option = null;
	let input = prompt ("Input your name", "Carlos Tevez");
	if (input != ""){
		let tbl = document.getElementById("myTable");
		let lastRow = tbl.rows.length;
		option = { 
			el: tbl, 
			lastRow: tbl.rows.length, 
			row: tbl.insertRow(lastRow), 
			input: input 
		};
	}
	return option;
}

function addRow(){
	let tb = new Table( getOptions() );
	tb.insertRow();
}
function removeRow(){
	let tbl = document.getElementById("myTable");
	var  option = { 
		el: tbl, 
		lastRow: tbl.rows.length
	};
		
	let tb = new Table( option );
	tb.deleteRows();
}