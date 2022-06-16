function receberSomenteOsParesDeIndicesPares(a){
    const resultado = []
    for(let i = 0; i < a.length; i++){
        if(i % 2 == 0){
            if(a[i] % 2 == 0){
                resultado.push(a[i])
            }
        }
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))