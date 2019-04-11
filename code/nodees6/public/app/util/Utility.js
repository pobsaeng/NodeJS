class Utility {
    constructor() {

    }
    sum(numbers) {
        var total = 0;
        for (var i = 0; i < numbers.length; i++)
            total += numbers[i];
        return total;
    }
    getPosition(el) {
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