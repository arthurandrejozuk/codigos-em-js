import { generateKeyPairSync } from "crypto"
// cria o tipo de algoritmo para as duas chaves
const { privateKey, publicKey } = generateKeyPairSync('rsa',
{
    modulusLength: 2048,
    
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }
});

// console.log(publicKey)
// console.log(privateKey)

import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados = publicEncrypt(
    publicKey, 
    Buffer.from("Mensagem secreta")
)

console.log(dadosCriptografados.toString('hex'))

// --------------transmissão---------------//

const dadosDecifrados = privateDecrypt( 
    privateKey,
    dadosCriptografados
)

console.log(`Dados Decifrado:, ${dadosDecifrados.toString("utf-8")}`)