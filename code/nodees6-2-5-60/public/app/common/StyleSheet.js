class StyleSheet {
    constructor(dom) {
        this.dom = dom || new Dom();
    }

    addCls(domEl, cls) {
        domEl = this.dom.validateDom(domEl);
        domEl.className = cls;
    }
    removeCls(domEl, cls) {
        domEl = this.dom.validateDom(domEl);
        domEl.classList.remove(cls);
    }
}