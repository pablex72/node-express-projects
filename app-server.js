const http = require('http');

// req: solucitud que recibio el servidor desde el clientInformation
// res: respuesta que enviara el servidor al cliente
const servidor = http.createServer((req,res)=>{
    //Proceso
    console.log("solicitud nueva")
    res.end("Hola mundo desde pablo dev");

});

//hacer que el servidor escuche
servidor.listen(3000, ()=>{
    console.log('el servidor esta escuchando .....')
});