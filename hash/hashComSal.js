import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

// Função cria hash com sal
function criaHashComSal(senha) {
    // randomiza 16 bytes e transforma em string em formato hex
    const sal = randomBytes(16).toString('hex');
    // cria senhaHash e o scryptSync permite colocar o senha, sal, de tamanho 64
    const senhaHash = scryptSync(senha, sal, 64).toString('hex');
    // junta as duas 
    return `${sal}:${senhaHash}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        // senha constituida de this.sal, this.hash, e separa os dois 
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha){
        // se o nome for igual
        if(nome === this.nome){
            // confere a hash com o "sal" dentro do tamanho de 64 bytes = 128 tamanho
            const testeHash = scryptSync(senha, this.sal, 64);
            // pega a hash em hexadecimal 
            const hashReal = Buffer.from(this.hash, 'hex');
            // confere se são iguais
            const hashes = timingSafeEqual(testeHash, hashReal);
            if(hashes) {
                console.log("Usuário autenticado com sucesso");
                return true;
            }
        }
        console.log("usuários ou senha incorretos");
        return false;

    }
}

const aa = new Usuario("Arthur Avila", "54321");
console.log(aa)
aa.autentica("Arthur Avila", "54321")