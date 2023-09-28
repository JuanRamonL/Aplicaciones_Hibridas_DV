//El modulo fs, que en español significa sistema de archivos, nos permite trabajar con archivos y directorios.  

import fs from 'node:fs';

//fs.readFile() es un metodo que nos permite leer un archivo. Este metodo recibe tres parametros, el primero es la ruta del archivo, el segundo es la codificacion del archivo, y el tercero es una funcion callback que recibe dos parametros, el primero es un error en caso de que exista, y el segundo es el contenido del archivo.

fs.readFile('saludo.txt', { encoding: 'utf-8' }, (error, data) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log(data);
    }
    //En este caso el tercer parametro es una arrow function, pero tambien puede ser una funcion normal. ejemplo: function(error, data){...}
});

//fs.stat es un metodo que nos permite obtener informacion de un archivo o directorio. Este metodo recibe dos parametros, el primero es la ruta del archivo o directorio, y el segundo es una funcion callback que recibe dos parametros, el primero es un error en caso de que exista, y el segundo es un objeto con la informacion del archivo o directorio.
fs.stat('saludo.txt', (error, stats) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log(stats);
    }
});

//fs.mkdir es un metodo que nos permite crear un directorio. Este metodo recibe tres parametros, el primero es la ruta del directorio, el segundo es un objeto con las opciones, y el tercero es una funcion callback que recibe dos parametros el primero es un error en caso de que exista y el segundo es la ruta del directorio creado.
fs.mkdir('NA', {recursive:true}, (error, path) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log(`Se creó el directorio img en la ruta ${path}`);
    }
});

//fs.copyFile es un metodo que nos permite copiar un archivo. Este metodo recibe tres parametros, el primero es la ruta del archivo original, el segundo es la ruta del archivo copia, y el tercero es una funcion callback que recibe un parametro que es un error en caso de que exista.
fs.copyFile('saludo.txt', 'NA/saludo2.txt', (error) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log('Se copió el archivo');
    }
});

//fs.rename es un metodo que nos permite renombrar un archivo o directorio. Este metodo recibe tres parametros, el primero es la ruta del archivo o directorio original, el segundo es la ruta del archivo o directorio con el nuevo nombre, y el tercero es una funcion callback que recibe un parametro que es un error en caso de que exista.

fs.rename('NA/saludo2.txt', 'NA/saludo3.txt', (error) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log('Se renombró el archivo');
    }
});

//fs.unlink es un metodo que nos permite eliminar un archivo. Este metodo recibe dos parametros, el primero es la ruta del archivo, y el segundo es una funcion callback que recibe un parametro que es un error en caso de que exista.
fs.unlink('NA/saludo3.txt', (error) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log('Se eliminó el archivo');
    }
});

//fs.writeFile es un metodo que nos permite escribir un archivo. Este metodo recibe cuatro parametros, el primero es la ruta del archivo, el segundo es el contenido del archivo, el tercero es un objeto con las opciones(Las opciones son 'W" para escribir, 'R' para leer), y el cuarto es una funcion callback que recibe un parametro que es un error en caso de que exista.
fs.writeFile('NA/ArchivoNuevo.csv', 'Nombre;Apellido \n Juan; lopez \n Sabrina; Casalini', {encoding: 'utf-8', flag:'w'}, (error) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log('Se escribió el archivo');
    }
});


//fs.opendir es un metodo que nos permite abrir un directorio. Este metodo recibe dos parametros, el primero es la ruta del directorio, y el segundo es una funcion callback que recibe dos parametros, el primero es un error en caso de que exista, y el segundo es un objeto con la informacion del directorio. 

//Devuelve un Array de strings con los nombres de los archivos y directorios que contiene el directorio.
fs.opendir('./', (error, dir) => {
    if(error){
        console.log('error: ', error);
    }else{
        console.log('Se abrió el directorio');
        console.log(dir);
    }
});