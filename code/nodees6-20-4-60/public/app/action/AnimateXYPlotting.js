class AnimateXYPlotting {
    constructor() {
        this.SOURCE_IMAGE = "images/67.png";
        this.SIZE = 50;  // width and height for the image
        this.MARGIN_LEFT = 15;  // left-margin for the container
        this.MARGIN_TOP = 10; // top-margin for the container
        // x, y coordinates of the items
        this.X_MIN = 0;
        this.Y_MIN = 0;
        this.X_MAX = 600;
        this.Y_MAX = 300;
        this.WIDTH = this.X_MAX - this.X_MIN + 3;
        this.HEIGHT = this.Y_MAX - this.Y_MIN + 3;
        this.numItems = 0;
        this.init();
    }
    // The onload handler. Initialize the bounds
    init() {
        var box = document.getElementById("box");
        // console.log( box.style.left );
        // console.log( box.style.width );
        // console.log( box.style.height );

        let dom = new Dom();
        let obj1 = dom.getPositionEl('box');
        console.log(obj1);

        box.style.top = this.MARGIN_TOP + "px";
        box.style.left = this.MARGIN_LEFT + "px";
        box.style.width = this.WIDTH + "px";
        box.style.height = this.HEIGHT + "px";

        let _this = this;
        document.getElementById("btnCreate").onclick = this.newItem.bind(null, event, _this);
        document.getElementById("btnUpdate").onclick = this.updateItem.bind(null, event, _this);
    }
    // Create a new item at x, y
    newItem(event, app) {
        let _this = app;
        // Need to parseInt as it will be added.
        var x = parseInt(document.getElementById("newX").value);
        var y = parseInt(document.getElementById("newY").value);
        var displayX = x + _this.MARGIN_LEFT;
        var displayY = y + _this.MARGIN_TOP;
        if ((x >= _this.X_MIN) && (x <= _this.X_MAX) && (y >= _this.Y_MIN) && (y <= _this.Y_MAX)) {
            _this.numItems++;
            // Put up an <img> to represent the item
            var itemImg = "<img class='item' name='item' src='"
                + _this.SOURCE_IMAGE + "' style='width:" + _this.SIZE
                + "px; height:" + _this.SIZE + "px; top:" + displayY
                + "px; left:" + displayX + "px' />";

            // Put up a <p> for the item description
            var itemDesc = "<p class='itemDesc' name='itemDesc' style='top:"
                + displayY + "px; left:" + displayX
                + "px'>" + _this.numItems + "</p>";

            document.getElementById('allItems').innerHTML += itemImg + itemDesc;
            // add a form's select option
            document.getElementById('updateNo').innerHTML
                += "<option>" + _this.numItems + "</option>";
        }
    }
    // Update the position of itemNo to x, y
    updateItem(event, app) {
        let _this = app;
        var x = parseInt(document.getElementById("updateX").value);
        var y = parseInt(document.getElementById("updateY").value);
        var itemNo = document.getElementById("updateNo").value - 1;
        console.log(itemNo);

        var items = document.getElementsByName("item");
        var itemDescs = document.getElementsByName("itemDesc");
        if (itemNo < items.length
            && (x >= _this.X_MIN) && (x <= _this.X_MAX) && (y >= _this.Y_MIN) && (y <= _this.Y_MAX)) {
            items[itemNo].style.left = x + _this.MARGIN_LEFT + "px";
            items[itemNo].style.top = y + _this.MARGIN_TOP + "px";
            itemDescs[itemNo].style.left = x + _this.MARGIN_LEFT + "px";
            itemDescs[itemNo].style.top = y + _this.MARGIN_TOP + "px";
        }
    }
}
