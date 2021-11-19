//variables
let click = 0;
let totalCompra = 0;
let carrito;

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
//Array bebidas // Drinks
const bebidas = [];
bebidas.push(new Bebida(`Healing Potion`, `Vino (Malbec)`, `Elementos`, `750ML`, 250, 1));
bebidas.push(new Bebida(`Charm Potion`, `Vino (Torrontes)`, `Elementos `, `750ML`, 350, 2));
bebidas.push(new Bebida(`Mana Potion`,`Gin`, `Bombay Sapphire`, `750ML`, 3300,3));
bebidas.push(new Bebida(`Elixir of Courage`, `Cerveza`, `Corona`, `710ML`, 280,4));
bebidas.push(new Bebida(`Elixir of Strength`, `Whisky`, `Johnnie Walker Red Label`, `1L`, 2550,5));
bebidas.push(new Bebida(`Elixir of Stealth`, `Ron`, `Flor de Caña`, `750ML`, 1650,6));
bebidas.push(new Bebida(`disinhibition Potion`, `Fernet`, `Branca`, `750ML`, 720, 7));
bebidas.push(new Bebida(`Elixir of Sweetening`, `Cola`, `Coca-Cola`, `2.25L`, 232.30,8));

//selectores // selectors
const htmlproductos = document.querySelector(`.productos`);
const formulario = document.querySelector(`.buscador`);
const listaProductos = $(`.listaProductos`);
const h1 = $(`.titulos h1`);
const h2 = $(`.titulos h2`);
const total = document.querySelector(`.total`);
//funciones

//mostrar carrito // show(load) cart

function mostrarCarrito(){
  const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
	carrito = carritoStorage || [];
  const arrayTotales = carrito.map(elemento => (elemento.precio * elemento.contador))
  totalCompra = arrayTotales.reduce((resultado, numeros) => resultado + numeros ,0)
  llenarHTMl()
  return carrito
}
mostrarCarrito()
//renderizar productos //render products 

function renderizar(array){
  array.forEach(bebida => {
    const section = document.createElement(`div`)
    section.classList.add(`col-lg-3`)
    section.classList.add(`col-md-6`)
    section.classList.add(`col-sm-12`)
    section.innerHTML =
      `      
        <div class="card">
          <div class="card-body d-flex flex-column  align-items-center">
            <h3 class="card-title fonth">${bebida.producto}</h3>
            <h3 class="card-title fonth">${bebida.tipoBebida} ${bebida.marca}</h3>
            <img src="img/producto${bebida.id}.png" alt="${bebida.tipoBebida} ${bebida.marca}">
            <p class="card-text fontSize2">$${bebida.precio}</p>
            <button id="boton${bebida.id}" type="button" class=" w-75 btn btn-outline-success fontSize2">Agregar al carrito</button>
          </div>
        </div>
            
      `;      
    htmlproductos.appendChild(section);      
  });
}
renderizar(bebidas);

//funcion formulario prevenir default
formulario.addEventListener('submit',busqueda);

//funcion para buscar producto

function busqueda(e){
  e.preventDefault();
  const input = document.querySelector(`.form-control`).value.toLowerCase().trim();
  const resultado = bebidas.filter(buscado => buscado.producto.toLowerCase().includes(input) )
  if(input != ``){
    htmlproductos.innerHTML = ``
    renderizar(resultado)
  } else {
    htmlproductos.innerHTML = ``
    renderizar(bebidas);
  }
}


//cargar carrito // fill cart
function cargarCarrito(bebida){
  switch (click) {
    case 1:
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++   
      break
    case 2:
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++    
      break
    case 3:
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++   
      break
    case 4:
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++    
      break
    case 5:
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++   
      break;
    case 6:
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++    
      break
    case 7:
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++   
      break
    case 8 :
      totalCompra = totalCompra + bebida.precio;
      bebida.contador ++   
      break
    default:
      break
  }
  if (bebida.contador != 0){
    analizarCarrito(bebida)
  }
  
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

//funcion para usar en la funcion de pushear items en el carrito //function to use in the function to push item into the cart
function analizarCarrito(bebida){
  if(carrito?.length){
    const index = carrito.findIndex(item => item.id === bebida.id)
    if (index == -1){
      carrito.push(bebida);
    } 
  } else{
    carrito.push(bebida);
  }
}

//funcion para que se muestren produtos del carrito
function ulCarrito(item){
  const nuevoProducto = `
    <ul class="row" id="producto${item.id}">
      <li class="fontSize2b text-center col-4" id="producto${item.id}">${item.producto}</li>
      <li class="d-flex justify-content-evenly text-center col-4" id="contador${item.id}">
        <button id="add${item.id}" type="button" class="btn btn-outline-primary w-25">
          <i class="far fa-plus-square"></i>
        </button>              
        <input type="text" class="form-control text-center w-25" id="input${item.id}" value="${item.contador}">
        <button id="rest${item.id}" type="button" class="btn btn-outline-primary w-25">
          <i class="far fa-minus-square"></i>
        </button>
      </li>
      <li class="fontSize2b text-center col-4" id="precio${item.id}">${item.precio * item.contador}</li>      
    </ul>
  `
  listaProductos.append(nuevoProducto)
}

//funcion para llenar el carrito en el html // function to gill the html
function llenarHTMl(){
  /* carrito = mostrarCarrito() */
  if(carrito?.length){
    carrito.forEach(item => {
      vaciarHTMl(item)
      ulCarrito(item)
    });
    mostrarTotal()
  }
  /* carrito.forEach(item => {
    lProducto(item)
    lCantidad(item)
    lPrecio(item)
  }); */
}

llenarHTMl();

//funcion para vaciar el carrito en el html //function to empty the cart in the html
function vaciarHTMl(item){
  $(`#producto${item.id}`).remove()
  total.innerHTML = ""
}

//funcion principal para llenar el carrito //main function to fill the array cart
bebidas.forEach(bebida => {
  const boton = document.querySelector(`#boton${bebida.id}`);
    boton.addEventListener("click",() => {
    click = bebida.id;
    cargarCarrito(bebida)
    llenarHTMl()
    });  
});

//funcion boton mas


//funcion para confimar compra // function to confirm purchase
const compras = document.querySelector(`.carrito .btn-outline-success`)
compras.addEventListener("click", () => {
  carrito.forEach(item => {
    vaciarHTMl(item);
    item.contador = 0;
  })
  bebidas.forEach(bebida => bebida.contador = 0);
  localStorage.clear();
  carrito = []
  Swal.fire(
    'Gracias por tu compra',
    'vas a recibir tu pedido pronto!',
    'success'
  )
  totalCompra = 0;
})

//funcion para vaciar carrito // function to empty array cart
const botonVaciar = document.querySelector(`.btn-outline-danger`)
botonVaciar.addEventListener(`click`,() => {
  carrito.forEach(item => {
    vaciarHTMl(item);
    item.contador = 0;
  })
  bebidas.forEach(bebida => bebida.contador = 0);
  localStorage.clear();
  carrito = [];
  totalCompra = 0;
})

//funcion para agergar total al Html // function to show in the html the total to pay 
function mostrarTotal(){
  total.innerHTML = `Total ${totalCompra}`
}


//animaciones
h1.fadeIn(3000)
h2.fadeIn(3000)

/* icono mas: <i class="far fa-plus-square"></i> */
/* icono menos: <i class="far fa-minus-square"></i>*/