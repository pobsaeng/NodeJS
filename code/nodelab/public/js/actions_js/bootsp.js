
function showModal() {
    var time = setInterval(function () {
        var modal = document.getElementById('myModal');
        if (modal) {

            displayModal(modal); //เรียกฟังก์ชันแสดง Modal
            clearInterval(time); //เคลียร์ฟังก์ชันหน่วงเวลาออก
        }
    }, 10);
}
function displayModal(modal) {
    var btn = document.getElementById("myBtn");
    var span = document.getElementById("myClose");
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    //event ตรวจสอบเมื่อกดนอก Modal
    window.onclick = function (event) { }
}

function highlightCode(node, keywords) {
    var text = node.textContent;
    node.textContent = ""; // Clear the node

    var match, pos = 0;
    while (match = keywords.exec(text)) {
        var before = text.slice(pos, match.index);
        node.appendChild(document.createTextNode(before));

        var span = document.createElement('span');
        span.style.color = "red";
        span.appendChild(document.createTextNode(match[0]));

        var strong = document.createElement("strong");
        strong.appendChild(document.createTextNode(match[0]));
        //node.appendChild(strong);
        node.appendChild(span);

        pos = keywords.lastIndex;
    }
    var after = text.slice(pos);
    node.appendChild(document.createTextNode(after));
}

function highlightAllCode() {
    var time = setInterval(function () {
        var el = document.body.getElementsByTagName("pre");
        if (el) {
            var languages = {
                javascript: /\b(function|return|var|document|var)\b/g /* … etc */
            };

            var div = document.body.getElementsByTagName("pre");
            for (var i = 0; i < div.length; i++) {

                var div = div[i];
                var lang = div.getAttribute("id");
                if (languages.hasOwnProperty(lang))

                    highlightCode(div, languages[lang]);
            }

            clearInterval(time); //เคลียร์ฟังก์ชันหน่วงเวลาออก
        }
    }, 10);

}