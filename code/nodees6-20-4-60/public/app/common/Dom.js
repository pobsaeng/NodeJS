class Dom {
    constructor() { }
    createTag(name, attributes) {
        let node = document.createElement(name);
        if (attributes) {
            for (let attr in attributes) {
                if (attributes.hasOwnProperty(attr)) {
                    node.setAttribute(attr, attributes[attr]);
                }
            }
        }

        for (let i = 2; i < arguments.length; i++) {
            let child = arguments[i];
            if (typeof child == "string") {
                child = document.createTextNode(child);
                node.appendChild(child);
            }
        }
        return node;
    }
    //checking if a string is blank, null or undefined
    isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }
    getAllValuesEl(el) {
        if (typeof el === 'string' || typeof el == "undefined") {
            el = document.getElementById(el);
        }
        let rowData = {};
        let tags = el.getElementsByTagName("*");
        let att = '';
        for (let i = 0; i < tags.length; i++) {
            att = '';
            if (tags[i].nodeName == 'INPUT' && !this.isBlank(tags[i].type)) {
                switch (tags[i].type) {
                    case 'text'://if type is text and get attribute id or name
                        if (!this.isBlank(tags[i].attributes.id)) {
                            att = tags[i].attributes.id.value;
                        } else if (!this.isBlank(tags[i].attributes.name)) {
                            att = tags[i].attributes.name.value;
                        }
                        if (!this.isBlank(att)) rowData[att] = tags[i].value;

                        break;
                    case 'password'://if type is text and get attribute id or name
                        if (!this.isBlank(tags[i].attributes.id)) {
                            att = tags[i].attributes.id.value;
                        } else if (!this.isBlank(tags[i].attributes.name)) {
                            att = tags[i].attributes.name.value;
                        }
                        if (!this.isBlank(att)) rowData[att] = tags[i].value;

                        break;
                    case 'email'://if type is text and get attribute id or name
                        if (!this.isBlank(tags[i].attributes.id)) {
                            att = tags[i].attributes.id.value;
                        } else if (!this.isBlank(tags[i].attributes.name)) {
                            att = tags[i].attributes.name.value;
                        }
                        if (!this.isBlank(att)) rowData[att] = tags[i].value;

                        break;
                    case 'radio':
                        if (tags[i].checked) {
                            if (!this.isBlank(tags[i].attributes.id)) {
                                att = tags[i].attributes.id.value;
                            } else if (!this.isBlank(tags[i].attributes.name)) {
                                att = tags[i].attributes.name.value;
                            }
                            let vals = !this.isBlank(tags[i].attributes.value) ?
                                tags[i].value : tags[i].nextSibling.textContent;
                            if (!this.isBlank(att)) rowData[att] = vals;
                        }
                        break;
                    case 'checkbox':
                        if (tags[i].checked) {
                            if (!this.isBlank(tags[i].attributes.id)) {
                                att = tags[i].attributes.id.value;
                            } else if (!this.isBlank(tags[i].attributes.name)) {
                                att = tags[i].attributes.name.value;
                            }
                            let vals = !this.isBlank(tags[i].attributes.value) ?
                                tags[i].value : tags[i].nextSibling.textContent;
                            if (!this.isBlank(att)) rowData[att] = vals;
                        }
                        break;
                    case 'file':
                        if (!this.isBlank(tags[i].attributes.id)) {
                            att = tags[i].attributes.id.value;
                        } else if (!this.isBlank(tags[i].attributes.name)) {
                            att = tags[i].attributes.name.value;
                        }
                        let vals = !this.isBlank(tags[i].attributes.value) ?
                            tags[i].value : tags[i].nextSibling.textContent;


                        let data_img = tags[i].getAttribute('data-img');
                        if (!this.isBlank(data_img)) {
                            if (!this.isBlank(att)) rowData[att] = data_img;
                        }
                        break
                    default:
                }
            }
            if (tags[i].nodeName == 'SELECT' && !this.isBlank(tags[i].type)) {
                let index = tags[i].selectedIndex;
                if (index != -1) {
                    if (!this.isBlank(tags[i].attributes.id)) {
                        att = tags[i].attributes.id.value;
                    } else if (!this.isBlank(tags[i].attributes.name)) {
                        att = tags[i].attributes.name.value;
                    }
                    let vals = '';
                    for (let j = 0, length = tags[i].options.length; j < length; j++) {
                        let option = tags[i].options[j];
                        if (option.selected) {
                            vals = vals + option.value + ',';
                        }
                    }
                    vals = vals.substring(0, vals.length - 1);
                    rowData[att] = vals;
                }
            }
            if (tags[i].nodeName == 'IMG') {
                if (!this.isBlank(tags[i].attributes.id)) {
                    att = tags[i].attributes.id.value;
                } else if (!this.isBlank(tags[i].attributes.name)) {
                    att = tags[i].attributes.name.value;
                }
                let vals = !this.isBlank(tags[i].attributes.value) ?
                    tags[i].value : tags[i].nextSibling.textContent;

                let img_src = tags[i].getAttribute('src');
                if (!this.isBlank(img_src)) {
                    if (!this.isBlank(att)) rowData[att] = img_src;
                }
            }
        }
        return rowData;
    }
    getArrayAttributeId(domEl) {
        let arrList = [];
        let childdren = this.validateDom(domEl).childNodes;

        for (let i = 0; i < childdren.length; i++) {
            if (childdren[i].nodeType == 1) {
                this.getArrayAttributeList(childdren[i], arrList);
            }
        }
        return arrList;
    }
    getArrayAttributeList(domEl, array) {
        //user => let arrayId = dom.getArrayAttributeId('id');
        let childdren = domEl.childNodes;
        for (let i = 0; i < childdren.length; i++) {
            if (childdren[i].nodeType == 1 && childdren[i].id != '') {
                array.push(childdren[i].id);
            }
        }
    }
    getNodeByAttribute(domEl, att) {
        //<= user => 
        // var attr = dom.getNodeByAttribute(domEl);
        // if (attr != undefined) { domEl = document.getElementById(attr.nodeValue) }
        let attrs = domEl.attributes;
        for (let i = 0; i < attrs.length; i++) {
            if (typeof (attrs[i]) != 'undefined' && attrs[i] != null) {
                if (typeof att != 'undefined') {
                    if (attrs[i].nodeName == att) {
                        return attrs[i];
                    }
                } else {
                    if (attrs[i].nodeName == 'id' || attrs[i].nodeName == 'name') {
                        return attrs[i];
                    }
                }
            }
        }
    }
    toggleVisibility(domEl) {
        domEl = this.validateDom(domEl);
        if (domEl.style.display == 'block') {
            domEl.style.display = 'none';
        } else {
            domEl.style.display = 'none';
        }
    }
    validateDom(domEl) {
        if (typeof domEl === "string" && domEl != null) {
            domEl = document.getElementById(domEl);
        }
        return domEl;
    }
    removeHtml(html) {
        let tmp = document.implementation.createHTMLDocument("New").body;
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    removeChildDomEl(domEl) {
        var element = this.validateDom(domEl);
        for (var i = element.length - 1; i >= 0; i--) {
            if (element[i]) { element[i].parentNode.removeChild(element[i]); }
        }
    }
    getPositionEl(el) {
        el = this.validateDom(el);
        var xPosition = 0;
        var yPosition = 0;

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
                var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

                xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
                yPosition += (el.offsetTop - yScrollPos + el.clientTop);
            } else {
                xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            }

            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }
}