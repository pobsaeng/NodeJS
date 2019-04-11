function dynamicTable(items, id){
  var tbl = document.getElementById(id);
  var fields = Object.keys(  items[0] );
  var str = '';
  
  str += '<thead><tr>';
  for(var h = 0; h < fields.length; h++){
    str += '<th>'+fields[h].toUpperCase()+'</th>';
  }
  str += '<th>(EDIT)</th><th>(DELETE)</th></tr><thead>';

  for(var i = 0; i < items.length; i++){
    str += '<tr>';
    for(var k = 0; k < fields.length; k++){
      if(k == 0){
        str += '<td style="width:30px; text-align: center;">';
      }
      else if(k == 3 || k == 4){
        str += '<td style="width:60px; text-align: center;">';
      }
      else if(k == 2){
        str += '<td style="width:40%;">';
      }
      else if(k == 1){
        str += '<td style="width:65%;">';
      }
      else {
        str += '<td>';
      }

      str += items[i][fields[k]]+' ';
      str += '</td>';
    }
    str += '<td><a href="getEditData?id='+items[i].id+'">Edit</a></td>';
    str += '<td><a href="getDeleteData?id='+items[i].id+'">Delete</a></td>';
    str += '</tr>';
   } 
   tbl.innerHTML = str;
}