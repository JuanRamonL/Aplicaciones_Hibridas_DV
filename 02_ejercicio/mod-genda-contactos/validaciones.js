function validarTelefono(telefono) {
    // Eliminamos los guiones usando replace y una expresión regular.
    var numeroLimpio = telefono.replace(/-/g, '');

    // Verificamos si el número resultante tiene 10 dígitos numéricos.
    var regex = /^\d{10}$/;
    
    // Utilizamos el método test() de la expresión regular para verificar si coincide con el formato.
    return regex.test(numeroLimpio);
}

function validarEmail(email) {
  // Utilizamos una expresión regular para verificar la presencia de "@" y la ausencia de espacios.
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export default {
    validarTelefono,
    validarEmail
    
}
