//modulo path, que enespañol signifiha ruta, es un modulo que nos permite trabajar con rutas de archivos y directorios.

import path from 'node:path';

//path.join() nos permite unir dos o mas rutas en una sola.
let ruta = path.join('img/','/profile/105236.jpg')

console.log(ruta);

console.log(path.dirname(ruta));//path.dirname() nos permite obtener el directorio de una ruta.

console.log(path.basename(ruta));//path.basename() nos permite obtener el nombre del archivo de una ruta.

console.log(path.extname(ruta));//path.extname() nos permite obtener la extencion de un archivo de una ruta.

console.log(path.resolve(ruta));//path.resolve() nos permite obtener la ruta absoluta de una ruta relativa.     
console.log(path.resolve('/img/','/profile/105236.jpg')); //si le pasamos dos parametros, el primero sera la ruta base y el segundo la ruta relativa. Al agregar "/" al inicio de la ruta relativa, la ruta base se ignora y se toma como ruta absoluta.