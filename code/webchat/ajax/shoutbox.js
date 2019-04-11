function newXmlHttp(){
var xmlhttp = false;

  try{
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }catch(e){
	  try{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }catch(e){
		xmlhttp = false;
	  }
  }

  if(!xmlhttp && document.createElement){
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
 
function check_data(nick, msg, Mode) {
  var cancle=false;
    if (nick.length==0) {
      alert('กรุณาป้อนชื่อก่อน');
      document.frm.nick.focus(); 
      cancle=true;
    } else if (msg.length==0) {
      alert('กรุณาป้อนข้อความก่อน') ;
      document.frm.message.focus(); 
      cancle=true;
    }
  
  if (cancle==false) {

    doCallAjax(Mode);
		
  }
  return false;
}

function doCallAjax(Mode) {
	
  var radField = document.frm.color; 
  var radLength = document.frm.color.length; 

  for (var i=0; i<radLength; i++) { 
    if (radField[i].checked) { 
      var chkColor = radField[i].value; 
      continue; 
    } 
  } 
	
  var url = 'shoutbox.php';
  var pmeters = "unick=" + encodeURI( document.getElementById("nick").value ) +
    "&umsg=" + encodeURI( document.getElementById("message").value ) +
    "&ucolor=" + chkColor +						
    "&aMode=" + Mode ;
  xmlhttp = newXmlHttp();
  xmlhttp.open('POST',url,true);
	console.log( pmeters );
  //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //xmlhttp.setRequestHeader("Content-length", pmeters.length);
  //xmlhttp.setRequestHeader("Connection", "close");
//xmlhttp.send(pmeters);
				
  xmlhttp.onreadystatechange = function()
  {

    if(xmlhttp.readyState == 3)  // Loading Request
    {
      document.getElementById("loading").innerHTML = "Now is Loading...";
    }

    if(xmlhttp.readyState == 4) // Return Request
    {
      document.getElementById("loading").innerHTML = xmlhttp.responseText;
      document.getElementById("nick").value = '';
      document.getElementById("message").value = '';	
      document.getElementById("color").value = '';					   			  
    }
				
  }	

}