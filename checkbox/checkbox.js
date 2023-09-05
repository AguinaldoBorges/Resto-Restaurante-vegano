const itensSelecionados = []
const finalizarPedidoBotao = document.getElementById('finalizar-pedido') 


function finalizarPedido(){
  const item = document.getElementsByName('item-cardapio')

  for(let i =0; i < item.length; i++){
    if(item[i].checked){
      itensSelecionados.push(item[i].value)
    }
  }

  const filtroItensRepetidos = itensSelecionados.filter((a, b) => itensSelecionados.indexOf(a) === b)
  console.log(filtroItensRepetidos)
  console.log(itensSelecionados)

  alert('Pedido Realizado')
}

const cardapio = document.querySelector('#cardapio')


cardapio.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;

  const div = checkbox.parentNode;

  if(checked){
    div.classList.add('teste')
  }else{
    div.classList.remove('teste')
  }
})

