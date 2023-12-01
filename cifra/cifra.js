const mensagemSecreta = "alura";



function cifrarMensagem(mensagem, movimentos){
    // pega a mensagem secreta e separa em um array
    let resultado;
    const mensagemCodificada = mensagem.split("").map(caractere => {
        // cria um map para cada string no array, como só tem uma letra, 
        // charCodeAt fica sempre com valor 0
        const codigoCaractere = caractere.charCodeAt(0);
        // transforma os números em Unicode em seus respectivos significados
        // todavia antes aumenta a quantidade de movimento digitado.
        return String.fromCharCode(codigoCaractere + movimentos)
    })
    resultado = mensagemCodificada.join("");
    return  resultado
}

function decifrarMensagem(mensagem, movimentos){
    // pega a mensagem secreta e separa em um array
    let resultado;
    const mensagemDecodificada = mensagem.split("").map(caractere => {
        // cria um map para cada string no array, como só tem uma letra, 
        // charCodeAt fica sempre com valor 0
        const codigoCaractere = caractere.charCodeAt(0);
        // transforma os números em Unicode em seus respectivos significados
        // todavia, antes, subtrai a quantidade de movimento digitado.
        return String.fromCharCode(codigoCaractere - movimentos)
    })
    resultado = mensagemDecodificada.join("");
}
    return resultado

const mensagemCifrada = cifrarMensagem(mensagemSecreta, 4)
const mensagemDecifrada = decifrarMensagem(mensagemCifrada, 3)
console.log(mensagemCifrada);