function calcularMedia(arc){
    let resultado = 0
    const qtdn = arc.length

    for(numero of arc){
        resultado += numero
    }
    return resultado / qtdn
}

console.log(calcularMedia([5,5,5,5,5]))