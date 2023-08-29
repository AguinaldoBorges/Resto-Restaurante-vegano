const imagens = document.getElementById('home__carrossel__container')
const imagem = document.querySelectorAll('#home__carrossel__container img')

let atual = 0


function carrossel() {
    atual++
    if (atual > 4) {
        atual = 0
    }
    console.log(8);
    imagens.style.transform = `translatex(${-atual * 100}%)`
}

function showBtnTop() {
    //let scroll = document.documentElement.scroll
    let scroll = window.pageYOffset
    console.log(scroll);
    let menu = document.querySelector('#voltarAoTopo')
    if (parseInt(scroll) < 350) {
        console.log('ESCONDE');
        menu.style.opacity = 0
    } else {
        console.log('EXIBE');
        menu.style.opacity = 1
    }
}

setInterval(carrossel, 1800)


const body = document.querySelector('body')
const imgs = document.querySelectorAll('img')

const modoCor = document.querySelector('#modo-cor')

/* onchange */
modoCor.addEventListener('change', async () => {
    if (body.className === 'dark-mode') {
        body.className = 'light-mode'
    } else {
        body.className = 'dark-mode'

    }
})
