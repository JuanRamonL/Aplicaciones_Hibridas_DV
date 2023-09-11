import validaciones from './validaciones.js'

var contactos = {
    contacto1: {
    nombre: "Juan López",
    telefono: "555-123-4567",
    email: "juan@example.com"
    },
  // Puedes agregar más contactos aquí
};

function agreagrContacto(nombre, telefono, email){
    if (validaciones.validarTelefono(telefono) == true){
    }else{
        return console.log(`El numero ${telefono} no es valido`)
    }   
    if(validaciones.validarEmail(email) == true){
    }else{
        return console.log(`El email ${email} no es valido `)
    }

    //Obtenemos la cantidad de claves que tiene un objeto y le sumamos uno.
    let nuevoId = `contacto${Object.keys(contactos).length + 1}`

    contactos[nuevoId] = {
        nombre: nombre,
        telefono: telefono,
        email: email
    };

    console.log("Contacto agregado con éxito.");
}

console.log(contactos)

agreagrContacto('Brian Lara', '123-456-7890', 'blara@email.com');
agreagrContacto('Juan Gonzalez', '123-456-7899','jgonzalez@email.com');
agreagrContacto('Error No Funciona', '000000','email-invalido')

console.log(contactos)