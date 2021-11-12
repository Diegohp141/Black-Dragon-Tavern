// cargar storage
let carrito
document.addEventListener('DOMContentLoaded', () => {
	const carritoStorage = JSON.parse(localStorage.getItem('carrito'));


	carrito = carritoStorage || [];
});
// CLase Constructora
class Bebida{
  constructor(producto, tipoBebida, marca, tamaño, precio, id){
    this.producto = producto;
    this.tipoBebida = tipoBebida
    this.marca = marca;
    this.tamaño = tamaño;
    this.precio = precio;
    this.id = id
    this.contador = 0;
  }
};
//Array
const bebidas = [];
bebidas.push(new Bebida(`Healing Potion`, `Vino (Malbec)`, `Elementos`, `750ML`, 250, 1));
bebidas.push(new Bebida(`Charm Potion`, `Vino (Torrontes)`, `Elementos `, `750ML`, 350, 2));
bebidas.push(new Bebida(`Mana Potion`,`Gin`, `Bombay Sapphire`, `750ML`, 3300,3));
bebidas.push(new Bebida(`Elixir of Courage`, `Cerveza`, `Corona`, `710ML`, 280,4));
bebidas.push(new Bebida(`Elixir of Strength`, `Whisky`, `Johnnie Walker Red Label`, `1L`, 2550,5));
bebidas.push(new Bebida(`Elixir of Stealth`, `Ron`, `Flor de Caña`, `750ML`, 1650,6));
bebidas.push(new Bebida(`disinhibition Potion`, `Fernet`, `Branca`, `750ML`, 720, 7));
bebidas.push(new Bebida(`Elixir of Sweetening`, `Cola`, `Coca-Cola`, `2.25L`, 232.30,8));
/* Logica */
let click = 0;
let totalCompra = 0;
/* funciones */
/* Primer forEache para evento click */
bebidas.forEach(bebida => {
  const boton = document.querySelector(`#boton${bebida.id}`)
  boton.addEventListener("click",() => {
    // switch para el boton
    click = bebida.id
    switch (click) {
      case 1:
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      case 2:
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      case 3:
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      case 4:
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      case 5:
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      case 6:
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      case 7:
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      case 8 :
        totalCompra = totalCompra + bebida.precio
        bebida.contador ++    
        break;
      default:
        break;
    }
    //llenar carrito
    if (bebida.contador != 0){
      if (!(carrito.includes(bebida))){
        carrito.push(bebida)
      }
    }
    // local storage
    localStorage.setItem('carrito', JSON.stringify(carrito));    
  });   
});

//selectores
const divProducto = document.querySelector(`.producto`)
const divPrecio = document.querySelector(`.precio`)
const divCantidad = document.querySelector(`.cantidad`)

//Agregar html

// funcion borrar inerhtml

//logica confimar compra
const compras = document.querySelector(`.carrito .btn-outline-success`)
compras.addEventListener("click", () => {
  localStorage.clear();
  carrito = []
  Swal.fire(
    'Gracias por tu compra',
    'vas a recibir tu pedido pronto!',
    'success'
  )
})

//

//logica vaciar carrito
const vaciar = document.querySelector(`.carrito .btn-outline-danger`)
vaciar.addEventListener("click", () => {
  localStorage.clear();
  carrito = [];
})

