function inverter(obj){
    objInvertido = {}

    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0,
              valor = 1

        objInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })

    return objInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3}))