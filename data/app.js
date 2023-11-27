const title = document.querySelectorAll('#big');

function alertBtn() {
    alert('Ayy, it works :D');
}

for (i = 0; i < title.length; i++) {
    // title[i].style.color = 'yellow'

    title[i].addEventListener('click', alertBtn)

};

