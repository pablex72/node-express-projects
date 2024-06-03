const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log('===> req(solicitud)');
    console.log(req.url);
    console.log(req.method)
    console.log(res.statusCode)
    res.end('hola mundowww')
});

servidor.listen(3000, ()=>{
    console.log(`El servidor esta escuchando en 3000....`);
})