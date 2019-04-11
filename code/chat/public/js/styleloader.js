var StyleLoader = function () { }
StyleLoader.prototype = {
    require: function (scripts, callback) {
        this.loadCount      = 0;
        this.totalRequired  = scripts.length;
        this.callback       = callback;

        for (var i = 0; i < scripts.length; i++) {
            this.writeScript(scripts[i]);
        }
    },
    loaded: function (evt) {
        this.loadCount++;

        if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
    },
    writeScript: function (src) {
        var self = this;
        var s = document.createElement('link');
        s.type = "text/css";
		s.rel = "stylesheet";
        s.async = true;
        s.href = src;
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}
var folder = 'css';
var allCSS= new StyleLoader();	
allCSS.require([
		folder + "/bootstrap.min.css",
		folder + "/font-awesome.min.css",
		folder + "/datepicker.css",
		folder + "/style.css",
		folder + "/sticky-footer-navbar.css",
		folder + "/main.css",
		folder + "/chat.css"
	], 
	function() { 
		//console.log('All CSS Loaded!'); 
	});