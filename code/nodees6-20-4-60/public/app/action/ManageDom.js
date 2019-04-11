class ManageDom {
    constructor() {
        this.init();
    }
    init() {
        this.initEvent();
    }
    initEvent() {
        const btnClick = document.getElementById('btnAdd');
        btnClick.addEventListener('click', function () {
            let dom = new Dom();
            let items = dom.getAllValuesEl('gridContainer');
            console.log(items);
        });
    }
}