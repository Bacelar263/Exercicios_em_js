function segundoMaior(arn){
    let indiceMaior = 0
    let segundoMaior

    arn.forEach((numero, indice) => {
        if( numero > arn[indiceMaior]){
            indiceMaior = indice
        }
    })

    arn.splice(indiceMaior, 1)
    segundoMaior = arn[0]

    arn.forEach(numero => {
        if(numero > segundoMaior){
            segundoMaior = numero
        }
    })

    return segundoMaior
}


console.log(segundoMaior([12, 16, 1, 5]))