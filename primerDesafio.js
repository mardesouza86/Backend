
class Usuario {
        constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }
    getFullName() 
    {
        return (`${this.nombre} ${this.apellido}`);
}
    addMascota(nuevaMascota)
    {
        this.mascotas.push(nuevaMascota);
}
    nombreMascotas() {
    return this.mascotas.map ((mascota) => mascota)
    }
    countMascotas() 
    {
        return this.mascotas.length;
    }

    addBook(titulo, nombreAutor) 
    {
        this.libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames()
     {
        return this.libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "Las Voces del Desierto",
        autor: "Marlo Morgan"
    },
    {
        nombre: "El precio de la Pasion",
        autor: "Gabriel Rolon"
    }

]

    const persona = new Usuario("Martin", "de Souza", libros ,["Perro", "Gato"])
    
    console.log(persona.getFullName()); 
    
    console.log(persona.getBookNames()); 
    persona.addBook("El Gato Negro", "Edgar Allan Poe")
    console.log(persona.getBookNames()); 
    
    console.log(persona.countMascotas()); 
    persona.addMascota('Canario');
    console.log(persona.countMascotas());
    console.log(persona.nombreMascotas()) 
    