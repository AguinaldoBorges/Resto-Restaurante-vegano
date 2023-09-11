const cardapio = [
    { nome: `salada xx`, descricao: `alface,couve,maionese`, calorias: 22, preco: 55 },
    { nome: `churasco salada`, descricao: `arroz ,farofa,carne`, calorias: 1235, preco: 777 },
    { nome: `feijoada`, descricao: `arroz ,couve    ,feijao`, calorias: 1234, preco: 59 },
]

// Filtros de calorias, saidas dos filtros=[nome,descricao,calorias,preco]
function filtrarCaloriasMaiorOuIgual(valorAfiltrar, arrayCardapio) {
    const filtrar = arrayCardapio.filter((arrayCardapio) =>
        arrayCardapio.calorias >= valorAfiltrar
    )
    console.log(filtrar)
}
function filtrarCaloriasMenorOuIgual(valorAfiltrar, arrayCardapio) {
    const filtrar = arrayCardapio.filter((arrayCardapio) =>
        arrayCardapio.calorias <= valorAfiltrar
    )
    console.log(filtrar)
}
function filtrarCaloriasEntreMaiorMenor(valorMaior, valorMenor, arrayCardapio) {
    const filtrar = arrayCardapio.filter((arrayCardapio) =>
        arrayCardapio.calorias <= valorMaior && arrayCardapio.calorias >= valorMenor
    )
    console.log(filtrar)
}
// Filtros de Preco, saidas dos filtros=[nome,descricao,calorias,preco]
function filtrarPrecoMaiorOuIgual(valorAfiltrar, arrayCardapio) {
    const filtrar = arrayCardapio.filter((arrayCardapio) =>
        arrayCardapio.preco >= valorAfiltrar
    )
    console.log(filtrar)
}
function filtrarPrecoMenorOuIgual(valorAfiltrar, arrayCardapio) {
    const filtrar = arrayCardapio.filter((arrayCardapio) =>
        arrayCardapio.preco <= valorAfiltrar
    )
    console.log(filtrar)
}
function filtrarPrecoEntreMaiorMenor(valorMaior, valorMenor, arrayCardapio) {
    const filtrar = arrayCardapio.filter((arrayCardapio) =>
        arrayCardapio.preco <= valorMaior && arrayCardapio.preco >= valorMenor
    )
    console.log(filtrar)
}
// Filtros de Nome, saidas dos filtros=[nome,descricao,calorias,preco]
function filtrarNomeContem(nomeDoPrato, arrayCardapio) {
    let resultados = []
    for (let i = 0; i < arrayCardapio.length; i++) {
        const separar = arrayCardapio[i].nome.split(` `)
        for (let j = 0; j < separar.length; j++) {
            if (separar[j].trim() === nomeDoPrato.trim()) {
                resultados.push(arrayCardapio[i])
                j = separar.length
            }
        }
    }
    console.log(resultados)
}
//Filtros de Descricao, saidas dos filtros=[nome,descricao,calorias,preco]
function filtrarDescricaoContem(nomeDaDescricao, arrayCardapio) {
    let resultados = []
    for (let i = 0; i < arrayCardapio.length; i++) {
        const separar = arrayCardapio[i].descricao.split(`,`)
        for (let j = 0; j < separar.length; j++) {
            if (nomeDaDescricao.trim() === separar[j].trim()) {
                resultados.push(arrayCardapio[i])
                j = separar.length
            }

        }
    }
    console.log(resultados)
}
function filtrarDescricaoNaoContem(nomeDaDescricao, arrayCardapio) {
    let resultados = []
    let numeroDeMarcacao = 0
    for (let i = 0; i < arrayCardapio.length; i++) {
        const separar = arrayCardapio[i].descricao.split(`,`)
        for (let j = 0; j < separar.length; j++) {
            if (separar[j].trim() !== nomeDaDescricao.trim()) {
                numeroDeMarcacao++
            } else {
                numeroDeMarcacao = 0
                j = separar.length
            }
        }
        if (numeroDeMarcacao !== 0) {
            resultados.push(arrayCardapio[i])
        }
    }
    console.log(resultados)
}
filtrarDescricaoNaoContem(`couve`, cardapio)