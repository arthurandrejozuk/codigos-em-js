import { generateKeyPairSync, createSign, createVerify } from "crypto";

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

let dados = "Essa string vai ser assinada!";

// assinatura 

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey, "hex");

console.log(assinatura);

// intermediario
dados += "arquivo alterado"

// envio do documento ----- documneto e assinatura e chave publica

const verificador = createVerify('rsa-sha256');
verificador.update(dados);
const ehVerificado = verificador.verify(publicKey, assinatura, "hex");

console.log(ehVerificado);