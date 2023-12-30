// encontrar a página e variante
if (location.pathname.split('/').pop().replace(/.html/gi, '') == "index") {
    var v = 0;
    localStorage.setItem("v", v);
}

var v = localStorage.getItem("v");
var p = location.pathname.split('/').pop().replace(/.html/gi, '');
localStorage.setItem("p", p);

//tirar uma variante à sorte
var r = Math.floor(Math.random() * 3);
var r1 = Math.floor(Math.random() * 3);
if (window.performance) {
    if (performance.navigation.type == 1) {
        var r = Math.floor(Math.random() * 3);
        var r1 = Math.floor(Math.random() * 3);

    }
};


// barra de progresso
const progressBar = document.querySelector('hr');
progressBar.style.width = `${(Number(p) * 100) / 17}%`;


//cabeçalho
console.log(p + '-' + v + '-' + r)
document.querySelector('#textbox').innerHTML = '<strong> ' + (Number(p) + 1) + '</strong>/17';

// the meat and potatoes
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
