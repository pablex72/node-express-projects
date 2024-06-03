// retornamos una PerformanceMeasure, la retornamos, para funciones asincronamos retornamos la
// promesa dentro de la funcion, y la retorna, y el programa espera que la promesa se complete
// al momento de llamar a esa funcion

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenado: ${producto} de pablo dev`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("ordenando una taza");
      } else {
        reject("Este producto no esta disponible actualmente");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("procesando respuesta");
    console.log(`la respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("gracias por tu compra");
    }, 4000);
  });
}

// encadenar esas promesas
//chaining promises
// ordenarProducto("taza")
//   .then((respuesta) => {
//     console.log("Respuesta Recibida");
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   })
//   .then(respuestaProcesada => {
//     console.log(respuestaProcesada);
//   })
//   .catch(error =>{
//     console.log(error);
//   })

// usando asynx await variante
//todas las funciones con async retornan una promesa
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("respuesta recibida");
    console.log(respuesta)
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('lapiz')