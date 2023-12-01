

import { leitor } from './leitor.js';

class Animal {
    constructor(classe, genero) {
        this.classe = classe;
        this.genero = genero;
    }
    setGenero(genero) {
        const generos = ["Macho", "Fêmea"];
        this.genero = generos[genero]
    }
    getGenero(){
        console.log(this.genero)
    }
}
const animal = new Animal();

animal.setGenero(1)
animal.getGenero()
