function buscarPalavrasSemelhantes(palavra, frase){
    let resultado = []
    for(let p of frase){
        if(p.includes(palavra)){
            resultado.push(p)
        }
    }
    return resultado
}

console.log(buscarPalavrasSemelhantes("pro",  ["programação", "mobile", "profissional"]))