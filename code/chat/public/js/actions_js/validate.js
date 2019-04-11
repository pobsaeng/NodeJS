function textFieldValidation(msg) {
	var el = document.getElementsByTagName("INPUT");
	for (var i = el.length - 1; i >= 0 ; i--) {	
		el[i].oninvalid = function(e) {
			var fieldId = e.target.id;
			e.target.setCustomValidity("");
			if (!e.target.validity.valid) {
				e.target.setCustomValidity(msg+' '+fieldId+"'!");
				return;
			}
		};
		el[i].oninput = function(e) {
			e.target.setCustomValidity("");
		};
	}
}