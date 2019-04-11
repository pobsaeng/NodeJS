function addTalk(el, user, msg){
	var li = createTag("li", {class:"left clearfix"});
	var spanImg = createTag("span", {class:"chat-img pull-left"});
	var img = createTag("img", {src:"images/you.png", alt:"User Avatar", class:"img-circle"});
	var divBody = createTag("div", {class:"chat-body clearfix"});
	var divheader = createTag("div", {class:"header"});
	var strong = createTag("strong", {class:"primary-font"}, user);
	var p = createTag("p", {}, msg);
	
	divheader.appendChild(strong);
	divBody.appendChild(divheader);
	divBody.appendChild(p);
	spanImg.appendChild(img);
	
	li.appendChild(spanImg);
	li.appendChild(divBody);
	document.querySelectorAll(el)[0].appendChild(li);
}