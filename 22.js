function numeroSorte(n){
    let nsorte = Math.floor(10 * Math.random() + 1)
    if(n == nsorte){
        console.log(`Parabéns! O número sorteado foi o ${nsorte}`)
    } else{
        console.log(`Que pena! O número sorteado foi o ${nsorte}`)
    }
}

numeroSorte(2)