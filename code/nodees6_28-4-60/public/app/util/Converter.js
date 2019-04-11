class Converter {
    dateToString(date) {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    }
    parseDate(str) {
        let arr = str.split("-");
        let y = parseInt(arr[0], 10);
        let m = parseInt(arr[1], 10) - 1;
        let d = parseInt(arr[2], 10);
        return new Date(y, m, d);
    }
    commaFormatted(amount) {
        var delimiter = ","; // replace comma if desired
        var a = amount.split('.', 2)
        var d = a[1];
        var i = parseInt(a[0]);
        if (isNaN(i)) { return ''; }
        var minus = '';
        if (i < 0) { minus = '-'; }
        i = Math.abs(i);
        var n = new String(i);
        var a = [];
        while (n.length > 3) {
            var nn = n.substr(n.length - 3);
            a.unshift(nn);
            n = n.substr(0, n.length - 3);
        }
        if (n.length > 0) { a.unshift(n); }
        n = a.join(delimiter);
        if (d.length < 1) { amount = n; }
        else { amount = n + '.' + d; }
        amount = minus + amount;
        return amount;
    }
    
}