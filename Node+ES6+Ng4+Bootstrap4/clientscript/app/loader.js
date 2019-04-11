var Loader = function () { }
Loader.prototype = {
    require: function (scripts, callback) {
        this.loadCount = 0;
        this.fileName = scripts;
        this.totalRequired = scripts.length;
        this.callback = callback;		

        for (var i = 0; i < scripts.length; i++) {

			var dotType = scripts[i].split('.').pop();
			
			if(dotType == 'js'){
				this.writeScript(scripts[i]);
				
			}else if(dotType == 'css'){
				this.writeLink(scripts[i]);
			}
        }
    },
    loaded: function (evt) {
        this.loadCount++;
        
        if (this.loadCount == this.totalRequired && typeof this.callback == 'function'){
            this.callback(this.fileName);
        }
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
    },
	writeLink: function (src) {
      var self = this;
        var s = document.createElement('link');
        s.type = "text/css";
        s.async = true;
        s.href = src;
		s.rel = 'stylesheet';
        s.addEventListener('load', function (e) { self.loaded(e); }, false);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(s);				
    }
}
var app = 'app',
    js = 'js/',
    css = 'css/',
	action = app + '/action/',
	config = app + '/config/';
	
var loader = new Loader();
loader.require([
    css + 'bootstrap.min.css',
    css + 'font-awesome.min.css',
	css + 'main.css',
	js + 'bootstrap.js',
	config + 'Routes.js',
	action + 'home.js',
    action + 'login.js',
	], 
    function(fileName) {
        console.log("<--[ Start initial files ]-->")
        for(var i=0; i<fileName.length; i++){
            var name = fileName[i].split('/').pop();
            console.log('('+(i+1)+') ' + name);
        }
        
        console.log('** All Scripts Loaded! **');
    });
