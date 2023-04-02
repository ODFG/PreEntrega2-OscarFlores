//Declaracion de constantes para el ejercicio
let carrito = []
let suEnvio = 0


let nuevoStock = 0



//Funcion anonima para sumar IVA al precio
const calcularIva = () => {
  suIva = subtotal * 0.16
}

//Funciones

const bajaStock = (stockActual, qCompra) => {
  nuevoStock = (stockActual - qCompra)
  return nuevoStock
}

const calcularEnvio = () => {
  if (suSubtotal < 900) {
    suEnvio = 50
    return suEnvio
  } else if (suSubtotal >= 900 && suSubtotal <= 2000) {
    suEnvio = 30
    return suEnvio
  } else {
    suEnvio = 0
    return suEnvio
  }
}

const mostrarProductos = () => {
  const listadoProductos = stock.map(producto => {
    return `ID: ${producto.id}\nNOMBRE: ${producto.nombre}\nTIPO: ${producto.tipo}\nPRECIO: ${producto.precio}\nSTOCK DISPONIBLE: ${producto.stock}`
  })

  let confirmar = true

  while (confirmar) {
    let productoComprado = parseInt(prompt(`Indica el ID del producto que quiera meter al carrito:\n${listadoProductos.join('\n\n')}`))

    let cantidadProducto = parseInt(prompt(`¿Cuantas quiere comprar?`))

    
    const producto = stock.find(producto => producto.id === productoComprado)

    if (producto) {
      agregarCarrito(producto, producto.id, cantidadProducto)
      bajaStock(producto.stock, cantidadProducto)
      console.log(`El inventario de ${producto.nombre} ahora es: ${nuevoStock}`)
      producto.stock = nuevoStock
    } else {
      alert('Ese producto no esta disponible')
    }
    
    let continuarComprando = confirm('¿Desea seguir comprando?')
    if (continuarComprando === true){
      confirmar = true
    } else {
      confirmar = false
    }
  }
}

const agregarCarrito = (producto, productoId, productoCantidad) => {
  const repetido = carrito.find(producto => producto.id == productoId)
  if (repetido){
    repetido.cantidad += productoCantidad
  } else{
    producto.cantidad += productoCantidad
    carrito.push(producto)
  }
}
alert('Bienvenido a Playeras Tam')

let suSubtotal = 0
let suIva = 0

mostrarProductos()

const mostrarCarrito = () => {
  const suCarrito = carrito.map(producto => {
    return `NOMBRE: ${producto.nombre}\nCANTIDAD: ${producto.cantidad}\nPRECIO UNITARIO: ${producto.precio}\n\n`
  })
  return suCarrito
}

alert(`Tu carrito es:\n${mostrarCarrito()}`)
let irAPagar = parseInt(prompt('Presione 0 para ir a pagar\nPresione 1 para salir.'))

if (irAPagar === 0){
  const subtotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)

  suIva = subtotal * 0.16
  calcularEnvio()
 
  let total = suEnvio + suIva + subtotal
  
  alert(`DETALLE:\n\nSUBTOTAL: $${subtotal}\nIVA: $${suIva.toFixed(2)}\nENVIO $${suEnvio}\n\nTOTAL FINAL: $${total.toFixed(2)}`)
} else if (irAPagar === 1){
  alert('Su compra se ha cancelado.\nGracias')
} else{
  alert('¡ERROR! Actualice pagina.')
}




