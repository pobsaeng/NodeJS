class Template {
    changeHtmlPage(page, callback) {
        let divs = ['page-header', 'page-content', 'page-footer'];
        let pages = ['tpl/header.html', page, 'tpl/footer.html']; //tpl/footer.html
        let promises = [];
        for (let i in pages) {
            promises.push(ajaxPromise(pages[i]));
        }

        Promise.all(promises).then(function (dataArr) {
            for (let i = 0; i < dataArr.length; i++) {
                document.getElementById(divs[i]).innerHTML = dataArr[i];
            }
            callback(true);
        }).catch(function (err) { callback(false); console.log(err); });
    };
    afterRenderIndexHTML(page, callback) {
        let divs = ['page-header', 'page-content', 'page-footer'];
        let pages = ['tpl/header.html', page, '']; //tpl/footer.html
        let promises = [];
        for (let i in pages) {
            promises.push(ajaxPromise(pages[i]));
        }

        Promise.all(promises).then(function (dataArr) {
            for (let i = 0; i < dataArr.length; i++) {
                document.getElementById(divs[i]).innerHTML = dataArr[i];
            }
            callback(true);
        }).catch(function (err) { callback(false); console.log(err); });
    }
}
