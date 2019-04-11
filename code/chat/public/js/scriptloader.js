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
	
var actions_js_dir = 'js/actions_js';
var views_js_dir = 'js/views_js';

var allJS = new ScriptLoader();
allJS.require([
		//views_js_dir + "/jquery.js",
		views_js_dir + "/bootstrap.js",
		
		actions_js_dir + "/animatepopup.js",
		actions_js_dir + "/dialog.js",
		actions_js_dir + "/talk.js",
		actions_js_dir + "/table.js",
		actions_js_dir + "/validate.js",
		actions_js_dir + "/dom.js",
		actions_js_dir + "/creater.js",
		actions_js_dir + "/action.js",
		actions_js_dir + "/common.js",
		actions_js_dir + "/ajaxAction.js"
	], 
	function() { 
		//console.log('All Scripts Loaded!'); 
	});