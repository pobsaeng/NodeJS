class HtmlUI {
    createUI(_layout, object, items) {
        let prop = {}, htmlText = '';
        //first add properties
        for (let index in object) {
            for (let name in object[index]) {
                prop[name] = object[index][name];
            }
        }
        let com = new Component();
        let keys = Object.keys(object);

        for (let i = 0; i < keys.length; i++) {
            let control = object[keys[i]].control;

            switch (control) {
                case 'textfield':
                    prop['value'] = items[keys[i]];
                    prop['tagName'] = keys[i];
                    prop['tagCls'] = 'form-control';
                    prop = this.addProperties(_layout, control, prop);
                    htmlText += com.getInputText(prop);
                    break;

                case 'radio':
                    prop['value'] = items[keys[i]];
                    prop['tagName'] = keys[i];
                    prop['tagCls'] = 'form-control';
                    prop = this.addProperties(_layout, control, prop);
                    htmlText += com.getRadio(prop);
                    break;

                case 'checkbox':
                    prop['value'] = items[keys[i]];
                    prop['tagName'] = keys[i];
                    prop = this.addProperties(_layout, control, prop);
                    htmlText += com.getCheckBox(prop);
                    break;

                case 'textarea':
                    prop['value'] = items[keys[i]];
                    prop['tagName'] = keys[i];
                    prop['tagCls'] = 'form-control';
                    prop = this.addProperties(_layout, control, prop);
                    htmlText += com.getTextArea(prop);
                    break;

                case 'email':
                    prop['value'] = items[keys[i]];
                    prop['tagName'] = keys[i];
                    prop['tagCls'] = 'form-control';
                    prop = this.addProperties(_layout, control, prop);
                    htmlText += com.getEmail(prop);
                    break;
                case 'button':
                    prop['tagName'] = keys[i];
                    prop['tagCls'] = 'btn btn-primary';
                    prop['divCls'] = _layout.divCls;

                    let btnGroup = object[keys[i]].btnGroup;
                    prop['btnGroup'] = btnGroup;
                    prop = this.addProperties(_layout, control, prop);
                    htmlText += com.getButton(prop);
                    break;
            }
        }
        if (_layout.layout == 'horizontal') {
            htmlText = '<div class="form-horizontal">' + htmlText + '</div></div>';
        } else {
            htmlText = '<div>' + htmlText + '</div>';
        }
        return htmlText;
    }
    addProperties(_layout, control, prop) {
        _layout = this.getLayout(_layout);
        //============ horizontal ============
        if (_layout.layout == 'horizontal') {
            if (control == 'textfield') {
                prop['labelDisable'] = false;
                prop['divCls'] = 'control-label ' + _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'radio') {
                prop['tagCls'] = 'radio-inline';
                prop['divCls'] = + _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'checkbox') {
                prop['tagCls'] = 'checkbox-inline';
                prop['divCls'] = _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'textarea') {
                prop['labelDisable'] = false;
                prop['divCls'] = 'control-label ' + _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'email') {
                // prop['labelDisable'] = true;
                prop['divCls'] = 'control-label ' + _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            }
        }
        //============ vertical ============
        if (_layout.layout == 'vertical') {
            if (control == 'textfield') {
                prop['labelDisable'] = false;
                prop['divCls'] = _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'radio') {
                prop['tagCls'] = 'radio';//checkbox-inline
                prop['divCls'] = _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'checkbox') {
                prop['tagCls'] = 'checkbox';//checkbox-inline
                prop['divCls'] = _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'textarea') {
                prop['labelDisable'] = false;
                prop['divCls'] = 'control-label ' + _layout.divCls;
                prop['labelCls'] = _layout.labelCls;

            } else if (control == 'button') {
                prop['divCls'] = 'control-label ' + _layout.divCls;
                prop['labelCls'] = _layout.labelCls;
            }
        }

        return prop;
    }
    getLayout(object) {
        let layout = null;
        if (object.layout == 'vertical') {
            layout = { layout: 'vertical', divCls: 'form-group', labelCls: 'control-label' };
        }
        if (object.layout == 'horizontal') {
            layout = { layout: 'horizontal', divCls: object.control, labelCls: 'control-label ' + object.lable };
        }
        return layout;
    }
}