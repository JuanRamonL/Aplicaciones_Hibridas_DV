//Creamos un servidor web con NODEJS 


import http from 'node:http';
import fs from 'node:fs';

//Creamos el servidor. createServer recibe un callback con dos parametros: request y response. El callback se ejecuta cada vez que alguien se conecta al servidor. request es lo que el navegador nos envia y response es lo que nosotros le vamos a responder.
const server = http.createServer(function (request, response) {
    console.log("Alguien se conecto al servidor");
    
    /*
    response.setHeader("Content-Type", "text/html"); // Le decimos al navegador que el contenido que le vamos a enviar es de tipo html.
    response.write("<h1> Hola mundo </h1>"); // Al agregar la etiqueta h1, el navegador interpreta que es un html y lo muestra como tal. El navgador interpreta el h1 y agrega la estructura html(cuidado con esto).
    response.write(`<h2> Esto es el inicio</h2>`); 
    response.end(); // Finalizamos la respuesta. Si no lo hacemos, el navegador se queda esperando una respuesta y se queda cargando.
    */

    // Con esta validacion podemos crear URLs dinamicas. Si la url es /, mostramos el inicio, sino mostramos otra pagina.
    if(request.url === "/"){
        response.setHeader("Content-Type", "text/html"); 
        response.write("<h1> Hola mundo </h1>"); 
        response.write(`<h2> Esto es el inicio</h2>`); 
        response.end();
    }else if(request.url === "/hola"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1> Hola mundo </h1>"); 
        response.write(`<h2> Esto es un saludo</h2>`);
        response.end(); 
    }else if(request.url === "/favicon.ico"){
        fs.readFile('favicon.png', function(err, data) {
            if(!err){
                response.write(data); 
                response.end();
            }else{
                response.end();
            }
        });
    }else{
        response.setHeader("Content-Type", "text/html"); 
        response.write("<h1> Hola mundo </h1>"); 
        response.write(`<h2> pagina no encontrada 404. sape</h2>`);
        response.end(); 
    }
    

    /* Con esta validacion podemos crear URLs dinamicas. Cada case es una url. Si la url es /, mostramos el inicio, sino mostramos otra pagina.
    switch (request.url) {
        case "/":
            response.write(`<h2> Esto es el inicio</h2>`); 
            break;
        case "/contacto":
            response.write(`<h2> Esto es el contacto</h2>`); 
            break;
        case "/favicon.ico":
            {
                fs.readFile('./favicon.png', function(err, data) {
                    if(!err){
                        response.write(data); 
                        response.end();
                    }else{
                        response.end();
                    }
                });
            }
            break;
        default:
            response.write(`<h2> pagina no encontrada 404. sape</h2>`);
            break;
    }
    */

    response.end(); // Finalizamos la respuesta. Si no lo hacemos, el navegador se queda esperando una respuesta y se queda cargando.
});

server.listen(2023, function () {
        console.log('Servidor corriendo en: http://localhost:2023')
});
