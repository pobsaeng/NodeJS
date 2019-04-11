class HtmlUI {
    constructor() {this.initEvent();}
    initEvent() {
        let items = SimulateData.simulateJSonData();
        let object = {}, list = items[0];
        let id = 'id', title = 'title';
        
        object[id] = this.getTextFieldProp(id, list);
        object[title] = this.getRadioProp(title, [
            { male: 'Male', value: '', checked: true },
            { female: 'Female', value: '' }
        ]);
        console.log(object);
    }
    getTextFieldProp(index, list) {
        let prop = {};
        prop['control'] = 'textfield';
        prop['tagName'] = index;
        prop['datalang'] = index;
        prop['value'] = list[index];
        prop['tagCls'] = 'form-control';
        prop['placeholder'] = true;
        prop['valueDisable'] = false;
        return Object.assign({}, prop);
    }
    getRadioProp(index, group) {
        let prop = {};
        prop['control'] = 'radio';
        prop['tagName'] = index;
        prop['tagCls'] = 'form-control';
        prop['datalang'] = index;
        prop['group'] = group;
        return Object.assign({}, prop);
    }
}
