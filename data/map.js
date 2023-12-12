var v = localStorage.getItem("v");
var p = localStorage.getItem("p");

//document.querySelector('#textbox').innerHTML = Number(p) + 1 + '/17';
fetch('../story/personagens.json')
    .then(response => response.json())
    .then(data => {
let nav = "";
nav += `
        <a href="../index.html" id="dot">Início</a>
        <a id="dot" style='pointer-events: none'>${Number(p) + 1} /17</a>
        <a href="personagem.html" id="dot">Personagem</a>
        <a id="dot" href="../${Number(p)}.html">Voltar</a>
        <h2>O segredo da Ilha</h2>
        
        `;
        document.querySelector('#top-nav').innerHTML = nav;
    });
fetch('../story/story.json')
    .then(response => response.json())
    .then(data => {
        let out = "";
        out += `
        <img style="width: auto; height: 90vh;" src='../data/images/mapa${Number(p) + 1}.png' />
        `;
        document.querySelector('#char').innerHTML = out;
        //document.querySelector('#texto').innerHTML = data.Story[p].Part.Variant[v].Version[r].Text
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
