function filtrarNumeros(n){
    const resultado = []
    for(let i = 0; i < n.length; i++){
        if(typeof(n[i]) == 'number'){
            resultado.push(n[i])
        }
    }
    return resultado
}

console.log(filtrarNumeros(['JavaScript', 1, 3, 'Web', 20]))