if (location.pathname.split('/').pop().replace(/.html/gi, '') == "index") {
    var v = 0;
    localStorage.setItem("v", v);
}

var r = Math.floor(Math.random() * 3);
var r1 = Math.floor(Math.random() * 3);
if (window.performance) {
    if (performance.navigation.type == 1) {
        var r = Math.floor(Math.random() * 3);
        var r1 = Math.floor(Math.random() * 3);

    }
};
var v = localStorage.getItem("v");
var p = location.pathname.split('/').pop().replace(/.html/gi, '');
localStorage.setItem("p", p);
console.log(p + '-' + v + '-' + r)
document.querySelector('#textbox').innerHTML = Number(p) + 1 + '/17';

fetch('../story/story.json')
    .then(response => response.json())
    .then(data => {
        let out = "";
        out += `
        <img src='data/images/${Number(p) + 1}-${Number(v)+1}.png' />
        `;
        document.querySelector('#illust').innerHTML = out;
        document.querySelector('#texto').innerHTML = data.Story[p].Part.Variant[v].Version[r].Text
    });
// ------------------------------

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
