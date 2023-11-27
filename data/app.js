const title = document.querySelectorAll('#big');

function alertBtn() {
    alert('Ayy, it works :D');
}

for (i = 0; i < title.length; i++) {
    // title[i].style.color = 'yellow'

    title[i].addEventListener('click', alertBtn)

};
if (window.performance) {
    if (performance.navigation.type == 1) {
        var r = new parseInt(Math.random() * 3);
    }
}
fetch('../story/story.json')
.then(response => response.json())
.then(data => {

    document.querySelector('#texto'). innerText = data.Part1.Version[r].Text
})

// var opar = document.getElementById('paragraph').innerHTML;

// function highlight() {
//   var paragraph = document.getElementById('paragraph');
//   var search = document.getElementById('typed-text').value;
//   search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); //https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex

//   var re = new RegExp(search, 'g');

//   if (search.length > 0)
//     paragraph.innerHTML = opar.replace(re, `<mark>$&</mark>`);
//   else paragraph.innerHTML = opar;
// }