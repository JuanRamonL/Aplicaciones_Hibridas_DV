//Creamos un servidor web con ExpressJS. Esta es la forma mas simple de crear un servidor web con ExpressJS.

//Importamos el modulo http
import express from 'express';
import path from 'node:path';

const app = express();

//get es la acción que se ejecuta cuando se hace una petición al servidor. Recibe dos parametros: la ruta y un callback con dos parametros: request y response. El callback se ejecuta cada vez que alguien se conecta al servidor. request es lo que el navegador nos envia y response es lo que nosotros le vamos a responder.
app.get('/', function (req, res) {
    res.send(path.resolve('index.html'));
});

app.get('/favicon.ico', function (req, res) {  
    res.sendFile(path.resolve('hernesto.png'));
}); 

app.listen(2023, function () {
    console.log('Servidor corriendo en: http://localhost:2023')
});