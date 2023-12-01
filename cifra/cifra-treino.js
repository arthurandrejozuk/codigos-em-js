function cifra(offset, mensagem){
    let resultado = "";
    // começa um loop e pega o tamanho da mensagem, o loop tem o tamanho da mensagem;
    for(let i = 0; i < mensagem.length; i++){
        // pega o codiga Ascii da letra, então se i = a, codeAsciiLetra recebe 65;
        let codeAsciiLetra = mensagem.charCodeAt(i);
        if(codeAsciiLetra >= 65 && codeAsciiLetra <= 90){
            //se entre 65 e 90 pega faz o calculo da modificações do formato do alfabeto
            let calculoOffset = ((codeAsciiLetra - 65 + offset) % 26) + 65  
            //    exemplo:         66 - 65 + 3 = 2, restante = 2 + 65; 67
            resultado += String.fromCharCode(calculoOffset)
        } else if(codeAsciiLetra >= 97 && codeAsciiLetra <= 122){
             //se entre 97 e 122 pega faz o calculo da modificações do formato do alfabeto 
            let calculoOffset = ((codeAsciiLetra - 97 + offset) % 26) + 97
            //    exemplo:      100 - 97 + 7 = 4 % 26 = 4 + 97; 101
            //                  aqui modifica para a letra no charCode 101
            resultado += String.fromCharCode(calculoOffset);
        } else {
            resultado += String.fromCharCode(codeAsciiLetra);
        }
    }
    return resultado;
}

console.log(cifra(4, "Arroz"));