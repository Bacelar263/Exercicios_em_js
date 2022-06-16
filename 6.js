function inverso(valor) {
    if(valor == true){
        console.log(false)
    } else if (valor == false) {
        console.log(true)
    } else if (typeof(valor) == 'number') {
            console.log(valor * -1)
    } else{
        console.log(`booleano ou números esperados, mas o parâmetro é do tipo ${typeof(valor)}`)
    }
}

inverso(true)
inverso('6')
inverso(-2000)
inverso(2000)
