//Obtenção dos objetos aonde serao adicionado os checkbox
const manha = document.querySelector('.menu__cafe-da-manha')
const divisoriaManha = manha.querySelectorAll('div p')

const almoco = document.querySelector('.menu__almoco')
const divisoriaAlmoco = almoco.querySelectorAll('div p')

const jantar = document.querySelector('.menu__jantar')
const divisoriaJantar = jantar.querySelectorAll('div p')

//Loop para adcionar em cada item na pagina, assim funcionando caso diminua ou aumente o numero de itens no cardapio e criação do objeto input(checbox) que sera adicionado dinamicamente na pagina
for(let i = 0; i < divisoriaManha.length; i++){
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  divisoriaManha[i].append(checkbox)
}
for(let i = 0; i < divisoriaAlmoco.length; i++){
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  divisoriaAlmoco[i].append(checkbox)
}
for(let i = 0; i < divisoriaJantar.length; i++){
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  divisoriaJantar[i].append(checkbox)
}

//Adição da funcionalidade do checkbox aonde adiciona a classe para mostrar vizualmente para o usuario que o item esta selecionado 
const checkboxCafe = document.querySelector('.menu__cafe-da-manha')
const checkboxAlmoco = document.querySelector('.menu__almoco')
const checkboxJantar = document.querySelector('.menu__almoco')

checkboxCafe.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;

  const div = checkbox.parentNode.parentNode;

  if(checked){
    div.classList.add('selecionado')
  }else{
    div.classList.remove('selecionado')
  }
});

checkboxAlmoco.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;

  const div = checkbox.parentNode.parentNode;

  if(checked){
    div.classList.add('selecionado')
  }else{
    div.classList.remove('selecionado')
  }
});

checkboxJantar.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;

  const div = checkbox.parentNode.parentNode;

  if(checked){
    div.classList.add('selecionado')
  }else{
    div.classList.remove('selecionado')
  }
});