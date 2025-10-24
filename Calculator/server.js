var txtbox;
var operation;
var fnum;

function init() {
    txtbox = document.getElementById('txtbox');
}

function setOp(ele) {
    operation = ele.innerText.trim();
    fnum = parseFloat(txtbox.innerText);
    txtbox.innerText = "0";
}

function set(ele) {
    var txt = txtbox.innerText;

    if (txt === "0" && ele.innerText !== ".") {
        txt = "";
    }

    if (ele.innerText === ".") {
        if (!txt.includes(".")) {
            txt += ele.innerText;
        }
    } else {
        txt += ele.innerText.trim();
    }

    txtbox.innerText = txt;
}

function calculate() {
    var snum = parseFloat(txtbox.innerText);
    var res = 0;

    switch (operation) {
        case '+': res = fnum + snum; break;
        case '-': res = fnum - snum; break;
        case '*': res = fnum * snum; break;
        case '/': res = fnum / snum; break;
    }

    txtbox.innerText = res;
    fnum = undefined;
    operation = undefined;
}
