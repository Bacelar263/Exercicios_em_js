function repetir(valor, repet){
    let resultado = []

    for(let i = 0; i < repet; i++){
        resultado.push(valor)
    }
    return resultado
}

console.log(repetir('Código', 4))
