class Langauge {
    constructor(lang) {
        if (!this.hasSessLanguage()) {
            this.lang = lang;
            this.setSessLanguage(lang);
        }
        this.init();
    }
    init() {
        this.putDataLangAttributeIntoTag();
    }
    isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
    hasSessLanguage() {
        let bool = false;
        let lang = sessionStorage.getItem('lang');
        if (!this.isBlank(lang)) bool = true;
        return bool;
    }
    getSessLanguage() {
        return sessionStorage.getItem('lang');
    }
    setSessLanguage(lang) {
        sessionStorage.setItem('lang', lang);
    }
    doLangauge(object_lang) {
        let tags = document.body.getElementsByTagName("*");

        for (let i = 0; i < tags.length; i++) {
            // console.log(tags[i].nodeName);
            if ((tags[i].nodeName == 'A' || tags[i].nodeName == 'BUTTON') && tags[i].textContent.trim() != '') {

                let patt = new RegExp(/\{(\w+)\}/g);
                let text = tags[i].getAttribute('data-lang');
                let reg = patt.test(text);
                if (reg) {
                    let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                    for (let key in object_lang) {
                        if (tag_name == key) {
                            tags[i].innerHTML = object_lang[key].trim();
                        }
                    }
                }
            }
            else if ((tags[i].nodeName == 'SPAN') && tags[i].textContent != '') {
                //if has first element child and clone node
                //if(tags[i].firstElementChild) is first and last element childs

                if (tags[i].firstElementChild) {
                    let choneNode = tags[i].firstElementChild.cloneNode(true);

                    let patt = new RegExp(/\{(\w+)\}/g);
                    let text = tags[i].getAttribute('data-lang');
                    let reg = patt.test(text);
                    if (reg) {
                        let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                        for (let key in object_lang) {
                            if (tag_name == key) {
                                // tags[i].innerHTML = object_lang[key].trim();
                                tags[i].innerHTML = choneNode.outerHTML + object_lang[key].trim();
                                // tags[i].insertAdjacentHTML('beforeend', ''+choneNode.outerHTML + object_lang[key].trim());
                            }
                        }
                    }
                }
                else {
                    let patt = new RegExp(/\{(\w+)\}/g);
                    let text = tags[i].getAttribute('data-lang');
                    let reg = patt.test(text);
                    if (reg) {
                        let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                        for (let key in object_lang) {
                            if (tag_name == key) {
                                tags[i].innerHTML = object_lang[key].trim();
                            }
                        }
                    }
                }
            }
            //===== this block is perfect =====
            else if (tags[i].nodeName == 'LABEL') {
                //only all children into label
                if (tags[i].children.length > 0) {
                    for (let j = 0; j < tags[i].children.length; j++) {
                        let children = tags[i].children[j];

                        if (children != undefined && (children.type == 'radio' || children.type == 'checkbox')) {
                            let attStr = children.getAttribute('data-lang');
                            if (attStr) {
                                let reg = new RegExp(/\{(\w+)\}/g).test(attStr);
                                if (reg) {
                                    let key_name = this.getAlphanumericText(attStr.trim()).toLowerCase();

                                    for (let key in object_lang) {
                                        if (key_name == key) {
                                            //remove next TEXT_NODE
                                            if (children.nextSibling != null && children.nextSibling.nodeType == Node.TEXT_NODE) {
                                                tags[i].removeChild(children.nextSibling);
                                            }
                                            //remove previous TEXT_NODE
                                            if (children.previousSibling != null && children.previousSibling.nodeType == Node.TEXT_NODE) {
                                                tags[i].removeChild(children.previousSibling);
                                            }
                                            //add new TEXT_NODE
                                            let textnode = document.createTextNode(object_lang[key].trim());
                                            tags[i].appendChild(textnode);
                                        }
                                    }

                                }
                            }
                        }
                    }
                } else {
                    //only all label (no hvae children)
                    let patt = new RegExp(/\{(\w+)\}/g);
                    let text = tags[i].getAttribute('data-lang');
                    let reg = patt.test(text);
                    if (reg) {
                        let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                        for (let key in object_lang) {
                            if (tag_name == key) {
                                tags[i].innerHTML = object_lang[key].trim();
                            }
                        }
                    }
                }
            }
            else if (tags[i].nodeName == 'TEXTAREA') {
                let patt = new RegExp(/\{(\w+)\}/g);
                let text = tags[i].getAttribute('data-lang');
                let reg = patt.test(text);
                if (reg) {
                    let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                    for (let key in object_lang) {
                        if (tag_name == key) {
                            tags[i].placeholder = object_lang[key].trim();
                        }
                    }
                }
            }
            else if (tags[i].nodeName == 'TH') {
                let patt = new RegExp(/\{(\w+)\}/g);
                let text = tags[i].getAttribute('data-lang');
                let reg = patt.test(text);

                if (reg) {
                    let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                    for (let key in object_lang) {
                        if (tag_name == key) {
                            tags[i].innerText = object_lang[key].trim();
                        }
                    }
                }
            }

            else if (tags[i].nodeName == 'INPUT' && typeof (tags[i].type) != 'undefined') {
                switch (tags[i].type) {
                    case 'submit':
                        let patt = new RegExp(/\{(\w+)\}/g);
                        let text = tags[i].getAttribute('data-lang');
                        let reg = patt.test(text);
                        if (reg) {
                            let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                            for (let key in object_lang) {
                                if (tag_name == key) {
                                    tags[i].value = object_lang[key].trim();
                                }
                            }
                        }
                        break;
                    case 'text':
                        let attrv = tags[i].attributes.placeholder;
                        if (attrv != undefined && attrv != '') {
                            let text = tags[i].getAttribute('data-lang');
                            if (text != '') {
                                let patt = new RegExp(/\{(\w+)\}/g);
                                let reg = patt.test(text);
                                if (reg) {
                                    let tag_name = this.getAlphanumericText(text.trim()).toLowerCase();
                                    for (let key in object_lang) {
                                        if (tag_name == key) {
                                            tags[i].placeholder = object_lang[key].trim();
                                        }
                                    }
                                }
                            }
                        }
                        break;

                    case 'email':
                        let at = tags[i].attributes.placeholder;
                        if (at != undefined && at != '') {
                            let t = tags[i].getAttribute('data-lang');
                            if (t != '') {
                                let _ptt = new RegExp(/\{(\w+)\}/g);
                                let rg = _ptt.test(t);
                                if (rg) {
                                    let tag_name = this.getAlphanumericText(t.trim()).toLowerCase();
                                    for (let key in object_lang) {
                                        if (tag_name == key) {
                                            tags[i].placeholder = object_lang[key].trim();
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    default:
                }
            }
        }
    }
    getAlphanumericText(text) {
        return text.replace(/\{(\w+)\}/g, function (_, name) {
            return name;
        });
    }
    putDataLangAttributeIntoTag() {
        let tags = document.body.getElementsByTagName("*");
        for (let i = 0; i < tags.length; i++) {

            // console.log( tags[i].attributes.hasOwnProperty('id'), tags[i].attributes.hasOwnProperty('name'));
            if ((tags[i].nodeName == 'A' || tags[i].nodeName == 'SPAN' || tags[i].nodeName == 'BUTTON') && tags[i].textContent != '') {
                let patt = new RegExp(/\{(\w+)\}/g);
                let text = tags[i].textContent.trim();
                let reg = patt.test(text);
                if (reg) {
                    tags[i].setAttribute('data-lang', tags[i].textContent.trim());
                }

            }
            else if (tags[i].nodeName == 'LABEL') {
                for (let j = 0; j < tags[j].children.length; j++) {
                    let children = tags[i].children[j];
                    //only all children into label
                    if (children != undefined && (children.type == 'radio' || children.type == 'checkbox')) {

                        let patt = new RegExp(/\{(\w+)\}/g);
                        let text = tags[i].textContent.trim();
                        let reg = patt.test(text);
                        if (reg) {
                            children.setAttribute('data-lang', tags[i].textContent.trim());
                        }
                    } else {
                        //only all label (no hvae children)
                        let patt = new RegExp(/\{(\w+)\}/g);
                        let text = tags[i].textContent.trim();
                        let reg = patt.test(text);
                        if (reg) {
                            tags[i].setAttribute('data-lang', tags[i].textContent.trim());
                        }
                    }
                }
            }
            else if (tags[i].nodeName == 'TEXTAREA') {
                let text = tags[i].getAttribute('placeholder');
                if (text != '') {
                    let patt = new RegExp(/\{(\w+)\}/g);
                    let reg = patt.test(text);
                    if (reg) {
                        tags[i].setAttribute('data-lang', tags[i].placeholder.trim());
                    }
                }
            }
            else if (tags[i].nodeName == 'INPUT' && typeof (tags[i].type) != 'undefined') {
                let patt = new RegExp(/\{(\w+)\}/g);
                switch (tags[i].type) {
                    case 'text'://textbox
                        let text = tags[i].getAttribute('placeholder');
                        if (text != '') {
                            let reg = patt.test(text);
                            if (reg) {
                                tags[i].setAttribute('data-lang', tags[i].placeholder.trim());
                            }
                        }
                        break;
                    case 'submit'://submit(button)
                        let attrv = tags[i].attributes.value;
                        if (attrv != undefined && attrv != '') {
                            let value = attrv.value.trim();
                            let reg = patt.test(value);
                            if (reg) {
                                tags[i].setAttribute('data-lang', value);
                            }
                        }
                        break;
                    case 'radio':
                    // let attrv = tags[i].attributes.value;
                    // if (attrv != undefined && attrv != '') {
                    //     let value = attrv.value.trim();
                    //     let reg = patt.test(value);
                    //     if (reg) {
                    //         tags[i].setAttribute('data-lang', value);
                    //     }
                    // }
                    // break;
                    default:

                }
            }

        }
    }
}