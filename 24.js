function contarCaractere(carac, frase){
    let resultado = 0
    for(let i = 0; i < frase.length; i++){
        if(frase[i] === carac){
            resultado++
        }
    }
    return resultado
}

console.log(contarCaractere("r", "Gótica rabuda ratoeira"))