function removerPropriedade(objeto, n){
    const copia = Object.assign({}, objeto)
    delete copia[n]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))