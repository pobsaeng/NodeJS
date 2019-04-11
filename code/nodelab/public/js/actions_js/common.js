function duplicateArray(a) {
	for(var i=0; i<=a.length; i++){
		for(var j=i; j<=a.length; j++){
			if(i != j && a[i] == a[j]){
				return true;
			}
		}
	}
	return false;
}
function buy(pro_id) {
	sessionStorage.setItem('pro_id', pro_id);
	console.log(sessionStorage.getItem('pro_id'));
}

function loadThumbnail(divEl){
	var thumb = ''+
		'<div class="col-md-3 col-sm-6 hero-feature">' +
			'<div class="thumbnail plain" style="padding-top:15px;">' +
				'<img src="images/argiano.jpg" height="150" width="125" alt="">' +
				'<div class="caption">' +
					'<h3>Feature Label</h3>' +
					'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' +
					'<p>' +
						'<a href="javascript:buy(12031)" class="btn btn-primary">Buy Now!</a> <a href="#" class="btn btn-default">More Info</a>' +
					'</p>' +
				'</div>' +
			'</div>' +
		'</div>';
		var div = document.createElement('div');
		div.innerHTML = thumb;
		divEl.appendChild(div);
		
}