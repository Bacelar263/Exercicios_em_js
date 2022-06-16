function despesasTotais(ard){
    let resultado = 0
    for(let elemento of ard){
        resultado += elemento.preco
    }
    return resultado
}

console.log(despesasTotais([
    {nome: "Jornal", categoria: "Informação", preco: 90.00},
    {nome: "Cinema", categoria: "Entretenimento", preco: 90.00}
]))

