function updateLanguage(lg) {
    let EN_LANG = SimulateData.getEnglish();
    let TH_LANG = SimulateData.getThai();

    if (lg.getSessLanguage() == 'en') {
        lg.doLangauge(EN_LANG);
        document.getElementById('language').innerHTML = 'ไทย';
    } else {
        lg.doLangauge(TH_LANG);
        document.getElementById('language').innerHTML = 'English';
    }
}
function languageTrigger() {
    let lg = new Langauge('th');
    updateLanguage(lg);
    let btnLang = document.getElementById('language');
    btnLang.addEventListener('click', function () {
        if (btnLang.textContent == 'English') {
            lg.setSessLanguage('en');
            updateLanguage(lg);
        } else {
            lg.setSessLanguage('th');
            updateLanguage(lg);
        }
    });
    // draw();
}
function createTagIntoBody() {
    let dom = new Dom();
    let header = dom.createTag('div', { id: 'page-header' }),
        content = dom.createTag('div', { id: 'page-content' }),
        footer = dom.createTag('div', { id: 'page-footer' });
    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);
}
function notifyCounter() {
    let dom = new Dom();
    let notifycounter = document.querySelector('.fa-globe');
    let alertbox = document.getElementById('alert-box');//data-dismiss="alert"
    let textNode = document.createTextNode('Hi! What are you doing?');
    
    notifycounter.addEventListener('click', function (e) {
        alertbox.classList.remove('hide');

        alertbox.appendChild(textNode);
    });
    let coloseBox = document.getElementById('coloseBox');
    coloseBox.addEventListener('click', function () {
        alertbox.classList.add('hide');
        
        if(alertbox.nodeType == Node.TEXT_NODE){
            alertbox.parentNode.removeChild( alertbox.previousSibling );
        }
        
        let notifycounter = document.getElementById('notify-counter');
        let notifycontainer = document.getElementById('notify-container');

        notifycontainer.classList.remove('notify-container');
        notifycounter.classList.remove('notify-counter');
        notifycounter.innerText = "";
    });
}
function draw() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.arc(5, 5, 5, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = "red";
    context.fill();

    drawText();
}
function drawText() {
    let ran = Math.floor((Math.random() * 199) * 3);;

    var canvas = document.getElementById("myTextCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "13px Tahoma";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(ran, canvas.width / 2, canvas.height / 1);

    var mySpanCanvas = document.getElementById("myCanvas");
    var context = mySpanCanvas.getContext("2d");
    mySpanCanvas.addEventListener('click', function () {

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, mySpanCanvas.width, mySpanCanvas.height);
        context.restore();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
}

let tpl = new Template();
function changeHTMLPage(path) {
    console.log('current page -> ' + path);
    if (path == null || path == undefined) {
        console.log('path is null or undefined!');
        return false;
    }

    let sp = path.split('/');
    let lastText = sp[sp.length - 1];
    let pageText = lastText.substring(0, lastText.indexOf('.')).toLowerCase();

    switch (pageText) {
        case "home":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    new Home();
                    languageTrigger();
                }
            });
            break;
        case "createtable":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    new CreateTable();
                    languageTrigger();
                    notifyCounter();
                }
            });
            break;
        case "webstorage":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    new WebStorageDemo();
                    languageTrigger();
                }
            });
            break;
        case "event":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    new ManageDom();
                    languageTrigger();
                }
            });
            break;
        case "jsxyplot":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    new AnimateXYPlotting();
                    languageTrigger();
                }
            });
            break;
        case "index":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    new ES6();
                    languageTrigger();
                }
            });
            break;
        default:

    }
    sessionStorage.setItem('URL', path);
}
window.onload = function () {
    createTagIntoBody();

    let sesUrl = sessionStorage.getItem('URL');
    if (sesUrl != null) {
        changeHTMLPage(sesUrl);
    } else {
        changeHTMLPage('html/table/createtable.html');
    }
};