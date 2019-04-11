class TemplateString {
    constructor() {

    }
    templateEngine(html, options) {
        var re = /<%(.+?)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
        var add = function (line, js) {
            js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
        while (match = re.exec(html)) {
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.substr(cursor, html.length - cursor));
        code += 'return r.join("");';
        return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    }
    templateEngine1(tpl, data) {
        var re = /<%([^%>]+)?%>/g, match;
        while (match = re.exec(tpl)) {
            tpl = tpl.replace(match[0], data[match[1]])
        }
        return tpl;
    }
}