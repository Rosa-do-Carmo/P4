var v = localStorage.getItem("v");
var p = localStorage.getItem("p");

fetch('../story/personagens.json')
    .then(response => response.json())
    .then(data => {
        let out = "";
        let bg = "";
        let nav = "";
        out += `
        <img src='${data.Personagem[v].Personagem.Image}' />
        `;
        bg += `
        <style> main{
            background-color: ${data.Personagem[v].Personagem.Cor};
        }
                h1{
                    color: var(--bg);
                } 
        </style>
        `;
        nav += `
        <a href="../index.html" id="dot">Início</a>
        <a id="dot" style="color: transparent;">Início</a>
        <a id="dot" href="../${Number(p)}.html">Voltar</a>
        <a href="mapa.html" id="dot">Mapa</a>
        <h2>O segredo da Ilha</h2>
        
        `;
        document.querySelector('#top-nav').innerHTML = nav;
        document.querySelector('#char').innerHTML = out;
        document.querySelector('#bg').innerHTML = bg;
        document.querySelector('#desc').innerHTML = data.Personagem[v].Personagem.Nome;
        document.title = data.Personagem[v].Personagem.Titulo;
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
