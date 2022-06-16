function estaEntre(numero, minimo, maximo, inclusivo) {
    if (inclusivo == true){
        if(numero == minimo || numero == maximo){
            console.log(true)
        }
    } else{
        if(numero >= minimo && numero <= maximo){
            console.log(true)
        } else{
            console.log(false)
        }
    }
}

estaEntre(10, 100, 50)
estaEntre(16, 100, 160)
estaEntre(3, 150, 3)
estaEntre(3, 150, 3, true)