const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req,res)=>{
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
        default:
            console.log(`el metodo usado no puede se r manejado por el servidor: ${method}`)
    }
})

function manejarSolicitudGET(req,res){
    const path = req.url;
    if(path === '/'){
        res.statusCode =200;
        res.end('bienveniso') //envia respuesta
    }else if(path ==='/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));//enviamos al cliente
    }
}

servidor.listen(3000,()=>{
    console.log('server escuchando en 30000')
})