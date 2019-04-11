var load = (function () {
    function loader(tag) {
        return function (url) {
            return new Promise(function (resolve, reject) {
                var elem = document.createElement(tag);
                var parent = 'head';
                var attr = 'src';

                elem.onload = function () { resolve(url); };
                elem.onerror = function () { reject(url); };

                switch (tag) {
                    case 'script':
                        elem.async = true;
                        break;
                    case 'link':
                        elem.type = 'text/css';
                        elem.rel = 'stylesheet';
                        attr = 'href';
                }

                elem[attr] = url;
                document[parent].appendChild(elem);

            });
        };//end function use promise 
    }
    return {
        css: loader('link'),
        js: loader('script')
    }
})();
let app = 'app',
    js = 'js/',
    css = 'css/',
    action = app + '/action/',
    common = app + '/common/',
    helper = app + '/helper/',
    algorithm = app + '/algorithm/',
    util = app + '/util/';

Promise.all([
    //CSS files
    load.css(css + 'bootstrap.min.css'),
    load.css(css + 'font-awesome.min.css'),
    load.css(css + 'main.css'),
    // load.css(css + 'app.css'),
    // load.css(css + 'style.css'),

    //Bootstrap JS and common files
    load.js(js + 'bootstrap.js'),
    load.js(common + 'Ajax.js'),
    load.js(common + 'Template.js'),
    load.js(common + 'Dom.js'),
    load.js(common + 'StyleSheet.js'),
    load.js(helper + 'Table.js'),
    load.js(helper + 'WebStorage.js'),
    load.js(helper + 'Pagination.js'),
    load.js(common + 'Bootstrap.js'),
    load.js(algorithm + 'Stack.js'),
    load.js(helper + 'Component.js'),
    
    //Actions each of HTML files
    load.js(action + 'Routes.js'),  //<- first render
    load.js(util + 'Validation.js'),
    load.js(util + 'Converter.js'),
    load.js(util + 'Utility.js'),
    load.js(util + 'TemplateString.js'),
    load.js(util + 'SimulateData.js'),
    load.js(util + 'Langauge.js'),
    load.js(action + 'Home.js'),
    load.js(action + 'CreateTable.js'),
    load.js(action + 'WebStorageDemo.js'),
    load.js(action + 'ManageDom.js'),
    load.js(action + 'AnimateXYPlotting.js'),
    load.js(action + 'ES6.js'),

]).then(function (fn) {
    fn = fn.toString().split(",");
    console.log('==== List of all files ====');
    for (var n in fn) console.log('-> ' + fn[n]);
    console.log('===== loaded! =====');
}).catch(function () {
    console.log('Loader is failure!!');
});