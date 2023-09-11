import valiCont from './contactos.js'


console.log(valiCont.contactos)

valiCont.agregarContacto('Brian Lara', '123-456-7890', 'blara@email.com');
valiCont.agregarContacto('Juan Gonzalez', '123-456-7899','jgonzalez@email.com');
valiCont.agregarContacto('Error No Funciona', '000000','email-invalido')

console.log(valiCont.contactos)