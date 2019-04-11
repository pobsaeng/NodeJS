class Filter {
    constructor() {

    }
    arrayfilter(array, test) {
        var passed = [];
        for (var i = 0; i < array.length; i++) {
            if (test(array[i]))
                passed.push(array[i]);
        }
        return passed;
    }
    // let json = SimulateData.simulateJSonData();
    // let filter = new Filter();
    // let list = filter.arrayfilter(json, function (items) {
    //     return items.price > 300;
    // });
}