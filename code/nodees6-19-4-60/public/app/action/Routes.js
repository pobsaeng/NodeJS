function updateLanguage(lg) {
    let EN_LANG = SimulateData.getEnglish();
    let TH_LANG = SimulateData.getThai();

    if (lg.getSessLanguage() == 'en') {
        lg.doLangauge( EN_LANG );
        document.getElementById('language').innerHTML = 'ไทย';
    } else {
        lg.doLangauge( TH_LANG );
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

let tpl = new Template();
function changeHTMLPage(path) {
    console.log('[ ' + path + ' ] <= started');
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
                    languageTrigger();
                    new Home();
                }
            });
            break;
        case "createtable":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    languageTrigger(); new CreateTable();
                }
            });
            break;
        case "webstorage":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    languageTrigger();
                    new WebStorageDemo();
                }
            });
            break;
        case "event":
            tpl.changeHtmlPage(path, function (status) {
                if (status) {
                    languageTrigger();
                    new ManageDom();
                }
            });
            break;
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