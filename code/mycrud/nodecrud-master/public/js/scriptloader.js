var ScriptLoader = function () { }
ScriptLoader.prototype = {
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
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);
    }
}
var folder = 'js';
var allJS = new ScriptLoader();
allJS.require([
		folder + "/table.js",
		folder + "/validate.js",
		folder + "/dom.js",
		folder + "/creater.js",
		folder + "/action.js",
		folder + "/common.js"
	], 
	function() { 
		//console.log('All Scripts Loaded!'); 
	});