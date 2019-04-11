function moveImage() {
	var oDiv = document.getElementById("oDiv");
	bImage = oDiv.style;
	bImage.xpos = parseInt(bImage.left);
	bImage.ypos = parseInt(bImage.top);
	status = bImage.xpos + "," +bImage.ypos;
	document.onkeydown = keyDown;
}
function keyDown() {
	var Key = event.keyCode;
	if (Key == 37 ) {   
		bImage.xpos -= 5;
		bImage.left = bImage.xpos;
	}
	if (Key == 39 ) {   
		bImage.xpos += 5;
		bImage.left = bImage.xpos;
   }
   if (Key == 38 ) {   
		bImage.ypos -= 5;
		bImage.top = bImage.ypos;
	}
	if (Key == 40 ) {   
		bImage.ypos += 5;
		bImage.top = bImage.ypos;
   }
   status = bImage.xpos + "," +bImage.ypos;
}

//this function can remove a array element.
Array.remove = function(array, from, to) {
	var rest = array.slice((to || from) + 1 || array.length);
	array.length = from < 0 ? array.length + from : from;
	return array.push.apply(array, rest);
};

//this variable represents the total number of popups can be displayed according to the viewport width
var total_popups = 0;
//arrays of popups ids
var popups = [];
//this is used to close a popup
function close_popup(id){
	for(var i = 0; i < popups.length; i++){
		if(id == popups[i]){
			Array.remove(popups, i);
			document.getElementById(id).style.display = "none";
			calculate_popups();
			return;
		}
	}   
}

//displays the popups. Displays based on the maximum number of popups that can be displayed on the current viewport width
function display_popups(){
	var right = 215;
	var i = 0;
	for(i; i < total_popups; i++){
		if(popups[i] != undefined){
			var element = document.getElementById(popups[i]);
			element.style.right = right + "px";
			right = right + 320;
			element.style.display = "block";
		}
	}
	
	for(var j = i; j < popups.length; j++){
		var element = document.getElementById(popups[j]);
		element.style.display = "none";
	}
}

//creates markup for a new popup. Adds the id to popups array.
function register_popup(id, name){
	for(var i = 0; i < popups.length; i++){   
		//already registered. Bring it to front.
		if(id == popups[i]){
			Array.remove(popups, i);
			popups.unshift(id);
			calculate_popups();
			return;
		}
	}               
	
	var element = '<div class="popup-box chat-popup slider" id="'+ id +'">';
	element = element + '<div class="popup-head">';
	element = element + '<div class="popup-head-left">'+ name +'</div>';
	element = element + '<div class="popup-head-right"><a href="javascript:close_popup(\''+ id +'\');">&#10005;</a></div>';
	element = element + '<div style="clear: both"></div></div><div class="popup-messages chat"></div></div>';
	
	document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;  
	popups.unshift(id);
	calculate_popups();
	
	moveBox(id);
	//init(id);
}

function moveBox(id){
	var mousePosition;
	var offset = [0,0];
	var isDown = false;

	var div = document.getElementById(id);
	div.addEventListener('mousedown', function(e) {
		isDown = true;
		offset = [
			div.offsetLeft - e.clientX,
			div.offsetTop - e.clientY
		];
	}, true);

	document.addEventListener('mouseup', function() {
		isDown = false;
	}, true);

	document.addEventListener('mousemove', function(event) {
		event.preventDefault();
		if (isDown) {
			mousePosition = {
		
				x : event.clientX,
				y : event.clientY
		
			};
			div.style.left = (mousePosition.x + offset[0]) + 'px';
			div.style.top  = (mousePosition.y + offset[1]) + 'px';
		}
	}, true);
}
//calculate the total number of popups suitable and then populate the toatal_popups variable.
function calculate_popups(){
	var width = window.innerWidth;
	console.log( width );
	
	if(width < 540){
		total_popups = 0;
	}else{
		width = width - 200;
		//320 is width of a single popup box
		total_popups = parseInt(width/330);
	}
	display_popups();
}

//recalculate when window is loaded and also when window is resized.
window.addEventListener("resize", calculate_popups);
window.addEventListener("load", calculate_popups);