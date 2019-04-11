class Home {
    constructor(opt) {
        this.initHome();
    }
    initHome() {
        this.initEvent();
    }
    initEvent() {
        let txtV1 = document.getElementById('textV1'),
            txtV2 = document.getElementById('textV2'),
            btnCal = document.getElementById('btnCal');

        let dom = new Dom();
        let btnClear = btnCal.cloneNode(true);
        btnClear.innerHTML = 'Clear';

        let divParent = btnCal.parentElement;
        let divRe = dom.createTag('div', { id: 'divResult', style: 'display:none;' });
        divParent.appendChild(divRe);

        btnClear.addEventListener('click', function (e) {
            txtV1.value = '';
            txtV2.value = '';
        });

        // console.log( parent.id );
        divParent.setAttribute("id", 'myDiv');
        divParent.appendChild(btnClear);

        let thisObj = this;
        btnCal.addEventListener('click', function (e) {
            let result = thisObj.calCulate(txtV1.value, txtV2.value);
            divRe.style = "display:block";
            divRe.innerHTML = result;
        });
    }
    calCulate() {
        let result = 0;
        for (let i = 0; i < arguments.length; i++) {
            let values = arguments[i];
            if (!isNaN(parseInt(values))) result += parseInt(values);
        }
        return result;
    }
}

