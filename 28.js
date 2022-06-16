function filtrarQtdNumeros(arqtd, qtd){
    let resultado = []
    
    for(let i = 0; i < arqtd.length; i++){
        let qtdDig = String(arqtd[i]).length

        if(qtdDig === qtd){
            resultado.push(arqtd[i])
        }
    }

    return resultado
}

console.log(filtrarQtdNumeros([38, 2, 365, 10, 125, 11], 2))