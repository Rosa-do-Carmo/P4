var r = Math.floor(Math.random() * 3);
var r1 = Math.floor(Math.random() * 3);
if (window.performance) {
    if (performance.navigation.type == 1) {
        var r = Math.floor(Math.random() * 3);
        var r1 = Math.floor(Math.random() * 3);
    }
};

var p = location.pathname.split('/').pop().replace(/.html/gi, '');
var v = 0;
console.log(p)

fetch('../story/story.json')
    .then(response => response.json())
    .then(data => {

        document.querySelector('#texto').innerHTML = data.Story[p].Part.Variant[v].Version[r].Text
    });
