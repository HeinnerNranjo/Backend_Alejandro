class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros.map(libro => libro);
        this.mascotas = mascotas.map(pet => pet);
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombre) {
        this.mascotas.push(nombre);
    }

    getMascotas() {
        return this.mascotas.map(pet => pet);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor });
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}

const libros = [
    {
        nombre: 'En la oscuridad',
        autor: 'Hector Tobar'
    }
];
const mascotas = ['perro', 'gato'];
const usuario1 = new Usuario('Alejandro', 'Naranjo', libros, mascotas);

/* Mostrar la información */

console.log(`Nombre completo: ${usuario1.getFullName()}`);
console.log(`Estas son las mascotas: ${usuario1.getMascotas()}`);
console.log(`Estos son los libros que tiene ${usuario1.getFullName()}: ${usuario1.getBookNames()}`)