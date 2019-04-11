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

            const fileInput = document.getElementById('photo');
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function () {
                const arrayBuffer = reader.result;
                var dv = new DataView(arrayBuffer);
                console.log(dv);
                
                console.log(file.name);
                console.log(file.size);
                console.log(file.type);

            };

        });


    }
}