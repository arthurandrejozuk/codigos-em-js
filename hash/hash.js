import { createHash } from "crypto";

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
}
const senhaHash = criaHash("senha2");

console.log(senhaHash);

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuario autenticado");
            return true
        }
        console.log("Usuario ou senha incorretos");
        return false
    }
}

const usuario = new Usuario("Arthur", "12345");

console.log(usuario)
usuario.autentica("Arthur", "12345")