function pathA() {
    var v = 0;
    localStorage.setItem("v", v);
};
function pathB() {
    var v = 1;
    localStorage.setItem("v", v);
};
function pathC() {
    var v = 2;
    localStorage.setItem("v", v);
};

// -----------------

function insertAndExecute(id, text) {
    document.getElementById(id).innerHTML = text;
    var scripts = Array.prototype.slice.call(document.getElementById(id).getElementsByTagName("script"));
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src != "") {
            var tag = document.createElement("script");
            tag.src = scripts[i].src;
            document.getElementsByTagName("head")[0].appendChild(tag);
        }
        else {
            eval(scripts[i].innerHTML);
        }
    }
}
