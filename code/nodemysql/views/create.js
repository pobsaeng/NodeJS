function makeRow(json, head, domId){
	var str = '';
	str += '<tr>';
	for(var k=0; k<head.length; k++){
		str += '<th>'+head[k]+'</th>';
	}
	str += '</tr>';
	for(var i=0; i<json.length; i++){
		str += '<tr>';
		str += '<td>'+json[i].id+'</td>';
		for(var j=0; j<json[i].items.length; j++){
			str += '<td>';
			str += json[i].items[j].value;
			str += '</td>';
		}
		str + '</tr>';
	}
	document.getElementById(domId).innerHTML = str;
}
function makeGrid( rowCount, columnCount, valuePoints) {
  var valueIndex = 0
  var grid = []

  for ( var r = 0 ; r < rowCount ; r++ ) {
	var row = { id: r, items: [] }
	
	for ( var c = 0 ; c < columnCount ; c++ ) {
	  row.items.push( { id: ( r + "-" + c ), value: valuePoints[ valueIndex ] } ); //read from left to right
	  if ( ++valueIndex >= valuePoints.length ) {
		valueIndex = 0
	  }
	}
	grid.push(row)
  }
  return grid;
}