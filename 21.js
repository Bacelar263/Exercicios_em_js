function menorNumero(arn){
    let menor = arn[0] 
    for(numeros in arn){
        if(arn[numeros] < menor){
            menor = arn[numeros]
        }
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))