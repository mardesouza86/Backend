
class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas

    }
}

    getFullName() 
    {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nuevaMascota)
     {
        this.mascotas.push(nuevaMascota);
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


    const libros = [
        {
            nombre: "Las Voces del Desierto",
            autor: "Marlo Morgan"
        },
        {
            nombre: "El Gato Negro",
            autor: "Edgar Allan Poe"
        }
    
    ]

    const persona = new Usuario("Martin", "de Souza", libros ,["Perro"])
    
    console.log(persona.getFullName()); 
    
    console.log(persona.getBookNames()); 
    persona.addBook("Arte abstracto y arte figurativo", "SALVAT")
    console.log(persona.getBookNames()); 
    
    console.log(persona.countMascotas()); 
    persona.addMascota('Canario');
    console.log(persona.countMascotas()); 
    

