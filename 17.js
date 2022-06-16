function somarNumeros(arn){
    let resultado = 0
    for(let i = 0; i < arn.length; i++){
        resultado = resultado + arn[i]
    }
    return resultado
}

console.log(somarNumeros([5,5,5,5,5,5]))