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
        </style>
        `;
        // cabeçalho
        nav += `
        <a href="../index.html" id="dot">Início</a>
        <a id="dot" style='pointer-events: none; color: transparent'>${Number(p) + 1} /17</a>
        <a id="dot" href="../${Number(p)}.html">Voltar</a>
        <a href="mapa.html" id="dot">Mapa</a>
        <h2>O segredo da Ilha</h2>
        
        `;
        document.querySelector('#top-nav').innerHTML = nav;
        document.querySelector('#char').innerHTML = out;
        document.querySelector('#bg').innerHTML = bg;
        document.querySelector('#nome').innerHTML = data.Personagem[v].Personagem.Nome;
        document.querySelector('#desc').innerHTML = data.Personagem[v].Personagem.Desc;
        document.title = data.Personagem[v].Personagem.Titulo;
    });