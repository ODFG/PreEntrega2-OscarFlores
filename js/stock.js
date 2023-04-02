const generadorId = () => { 
  return Math.floor(Math.random() * Date.now())
}

const randomizadorCantidad = () => {
  return Math.ceil(Math.random() * 10)
}

const stock = [
  {
    id: 1,
    nombre: 'Playera Tam negra',
    tipo: 'Casual',
    descripcion: '50% algodon y 50% poliester',
    precio: 200,
    stock: 40,
    cantidad: 0,
  },

  {
    id: 2,
    nombre: 'Playera Cara Feliz',
    tipo: 'Casual',
    descripcion: '100% algodón',
    precio: 100,
    stock: 50,
    cantidad: 0,
  },

  {
    id: 3,
    nombre: 'Playera Cuadros',
    tipo: 'Formal',
    descripcion: '40% algodón y 60% poliester.',
    precio: 250,
    stock: 30,
    cantidad: 0,
  },

  {
    id: 4,
    nombre: 'Playera Marca Blanca',
    tipo: 'Casual',
    descripcion: '100% algodón',
    precio: 100,
    stock: 50,
    cantidad: 0,
  },
]
