import { createCipheriv, randomBytes, createDecipheriv } from "crypto";


//mensagem para criptografar
const mensagem = "Demonstração do curso";
//determina a chave em bytes randomicos 
const chave = randomBytes(32);
// determina vetor inicial
const vi = randomBytes(16);

// para criar precisamos uma cifra colocar um algoritmo, como aes256, uma chave e um initial vector
const cifra = createCipheriv("aes256", chave, vi);

// tranforma a mensagem em cifra 
const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex')

console.log(mensagemCifrada);

// Transmissão ----------------- chave, vi, mensagem

// Decifrar 

// Cria o mesmo tipo, porém agora para decifrar
const decifra = createDecipheriv('aes256', chave, vi);
// ao contrario do outro temos agora que pegar um padrão hex e transformar em UTF-8 
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log(mensagemDecifrada);