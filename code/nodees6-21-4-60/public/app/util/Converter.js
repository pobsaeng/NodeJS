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

}