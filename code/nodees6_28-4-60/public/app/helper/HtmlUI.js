class HtmlUI {
    createMapUI(object, items) {
        let com = new Component();
        let map = new Map();

        for (let key in items) {
            if (object.hasOwnProperty(key)) {
                let obj = {};
                obj[key] = items[key];
                let html = com.getHTMLText(object[key], obj);
                // console.log(html);
                map.set(key, html);
            }
        }

        return map;
    }
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
}