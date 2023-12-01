

const comparaValor = () =>
 {
    const torreDireita = [1,2,3];
    const torreMeio = [];
    const torreEsquerda = [];

    if(torreMeio.length === 0){
        console.log("torre meio vazia")
    } else {
        console.log("torre do meio tem: ", torreMeio.forEach(valor => {console.log(torreMeio[valor])}) )
    }
    
    if(torreEsquerda.length === 0){
        console.log("torre esquerda vazia")
    } else {
        console.log("torre da Esquerda tem: ", torreEsquerda.forEach(valor => {console.log(torreEsquerda[valor])}) )
    }
    if(torreDireita.length === 0){
        console.log("torre direita vazia")
    } else {
        console.log("torre da direita tem: ", torreDireita.length)
        torreDireita.forEach(valor => {console.log(torreDireita[valor - 1])})
        if(torreDireita[0] === 1){
            torreMeio.push(torreDireita[0])
            console.log("torre meio: ",...torreMeio)
        } 
        if(torreDireita[1] === 2){
            torreEsquerda.push(torreDireita[1])
            console.log("torre esquerda: ",...torreEsquerda)
        }
        if(torreEsquerda[0] === 2 || torreMeio[0] === 1){
            torreEsquerda.push(torreMeio[0])
            torreMeio[0] = '';
            console.log("torre esquerda: ", ...torreEsquerda)
            
        } 
        if(torreMeio.length === 1){
            torreMeio.push(torreDireita[2])
            console.log("torre meio: ", ...torreMeio)
        }
        if(torreDireita[0] === 1){
            torreDireita.splice(0, 3)
            torreDireita.push(torreEsquerda[1])
            
            console.log("torre direita: ", ...torreDireita)
        }
        if(torreMeio[1] === 3){
            torreMeio.push(torreEsquerda[0])
            torreMeio.push(torreDireita[0])
            console.log("torre meio: ", ...torreMeio)
        }
    }
    
  
}

comparaValor();
