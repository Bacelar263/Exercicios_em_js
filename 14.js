function objetoParaArray(obj){
    const resultado = []

    for(let chave in obj){
        resultado.push([ chave, obj[chave] ])
    }

    return resultado
}

console.log(objetoParaArray({
    nome: "Lara?",
    numero: "(77) 9 9822-3211"
}))