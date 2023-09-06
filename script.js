const showBtnTop = () => {
    //let scroll = document.documentElement.scroll
    let scroll = window.pageYOffset
    let menu = document.querySelector('#voltarAoTopo')
    if (parseInt(scroll) < 350) {
        menu.style.opacity = 0
    } else {
        menu.style.opacity = 1
    }
}

//------Section Home -------
const carrosselConteiner = document.getElementById('home__carrossel__container')
const imagens = ['./assets/home/carrossel-1.png', './assets/home/carrossel-2.jpg',
    './assets/home/carrossel-3.jpg', './assets/home/carrossel-4.jpg',
    './assets/home/carrossel-5.jpg']

let atual = 0
let imagemAtual = document.createElement('img');
imagemAtual.src = imagens[atual];
imagemAtual.style.borderTopLeftRadius = '150px';
imagemAtual.style.borderBottomRightRadius = '150px';
imagemAtual.style.border = '#E76F51 solid 5px'
carrosselConteiner.appendChild(imagemAtual);

function carrossel() {
    atual++
    if (atual > imagens.length - 1) {
        atual = 0
    }
    imagemAtual.src = imagens[atual]
}

setInterval(carrossel, 4000)

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
