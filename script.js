const imagens = document.getElementById('home__carrossel__container')
const imagem = document.querySelectorAll('#home__carrossel__container img')

let atual = 0

// function carrossel() {
//     atual++
//     if (atual > 4) {
//         atual = 0
//     }
//     console.log(8);
//     imagens.style.transform = `translatex(${-atual * 100}%)`
// }

// function showBtnTop() {
//     //let scroll = document.documentElement.scroll
//      let scroll = window.pageYOffset
//      console.log(scroll);
//     let menu = document.querySelector('#voltarAoTopo')
//     if (parseInt(scroll) < 350) {
//          console.log('ESCONDE');
//         menu.style.opacity = 0
//     } else {
//          console.log('EXIBE');
//         menu.style.opacity = 1
//     }
// }

// setInterval(carrossel, 1800)


//-----SECTION CONSUMIDOR FELIZ-------

//DEPOIMENTOS
const consumidorFeliz = [
    { nome: 'Majin boo', comentario: 'Comidinha vegana preparada com muito carinho e amor, não só pelos alimentos, mas também pelas vidas poupadas.', imgBg: '/assets/depoimentos/depoimento-1.jpg' },
    { nome: 'Vinsmoke Sanji', comentario: 'Os anjos nos deram a comida; os demônios, o tempero.', imgBg: '/assets/depoimentos/depoimento-2.jpg' },
    { nome: 'Nico Robin', comentario: 'Tornar-me vegana não foi uma tarefa fácil, mas nunca me arrependi dessa escolha, e cada diz mais amo essa culinária.', imgBg: '/assets/depoimentos/depoimento-3.jpg' },
    { nome: 'Monkey D. Luffy', comentario: 'Quero só ver, olhar para esse prato vegano e não dizer que está lindo. Mais do que isso, está delicioso, experimentem!', imgBg: '/assets/depoimentos/depoimento-4.jpg' },
    { nome: 'Aguinaldo Borges Raiol', comentario: 'Esses pratos provavelmente vão contra o que vocês pensam sobre comida vegana, porque é lindo e, mais que isso, saboroso.', imgBg: '/assets/depoimentos/depoimento-5.jpg' },
    { nome: 'João Wick', comentario: 'Coma de tudo, porque pizza não engorda, massa não engorda, chocolate não engorda. Quem engorda é você!', imgBg: '/assets/depoimentos/depoimento-6.jpg' }
];


//SELETORES DO HTML
const depoimentos_carrossel = document.querySelector('.depoimentos__carrossel')
const listaDepoimentos = document.querySelector('.depoimentos_content');
const btn_depoimentos = document.querySelectorAll('.btn_depoimentos');

//ESTABELECENDO O PRIMEIRO ITEM DA TELA E UM INDEX VARIÁVEL
let index = 0;

let imgAspas = document.createElement('img');
imgAspas.src = '/assets/depoimentos/icone-de-citacao.png';

let comentarioAtual = document.createElement('p');
comentarioAtual.innerText = consumidorFeliz[index].comentario;

let consumidorAtual = document.createElement('h4');
consumidorAtual.innerText = consumidorFeliz[index].nome;


listaDepoimentos.appendChild(imgAspas);
listaDepoimentos.appendChild(comentarioAtual);
listaDepoimentos.appendChild(consumidorAtual);

depoimentos_carrossel.style.backgroundImage = `url(${consumidorFeliz[index].imgBg})`

//ADICIONANDO EVENTOS AOS BOTOES PROX/ANTERIOR
btn_depoimentos.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const { id, value } = e.target;

        if (id === 'proximo' && value === 'on') {
            index++;
            if (index > consumidorFeliz.length - 1) {
                index = 0;
            }
            comentarioAtual.innerText = consumidorFeliz[index].comentario;
            consumidorAtual.innerText = consumidorFeliz[index].nome;
            depoimentos_carrossel.style.backgroundImage = `url(${consumidorFeliz[index].imgBg})`
        }

        if (id === 'anterior' && value === 'on') {
            index--;
            if (index < 0) {
                index = consumidorFeliz.length - 1;
            }
            comentarioAtual.innerText = consumidorFeliz[index].comentario;
            consumidorAtual.innerText = consumidorFeliz[index].nome;
            depoimentos_carrossel.style.backgroundImage = `url(${consumidorFeliz[index].imgBg})`
        }
    })
})

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
