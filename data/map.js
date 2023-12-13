var v = localStorage.getItem("v");
var p = localStorage.getItem("p");

// cabeçalho
fetch('../story/personagens.json')
    .then(response => response.json())
    .then(data => {
let nav = "";
nav += `
        <a href="../index.html" id="dot">Início</a>
        <a id="dot" style='pointer-events: none; color: transparent'>${Number(p) + 1} /17</a>
        <a href="personagem.html" id="dot">Personagem</a>
        <a id="dot" href="../${Number(p)}.html">Voltar</a>
        <h2>O segredo da Ilha</h2>
        
        `;
        document.querySelector('#top-nav').innerHTML = nav;
    });

    // the meat and potatoes
fetch('../story/story.json')
    .then(response => response.json())
    .then(data => {
        let out = "";
        out += `
        <img style="width: auto; height: 90vh;" src='../data/images/mapa${Number(p) + 1}.png' />
        `;
        document.querySelector('#char').innerHTML = out;
    });
