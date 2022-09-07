class Producto{
    constructor(marca, valor){
        this.marca = marca;
        this.valor= valor;
    }
}

let opciones = [
    {marca: "Remeras",valor:"10500"},
    {marca: "Pantalones",valor:"21250"},
    {marca: "Zapatillas",valor:"8000"},
    {marca: "Buzos",valor:"15500"},
];

function cargarProducto(arrayProductos){
    let marca = prompt("ingrese el producto seleccionado");
    let valor = parseInt(prompt("ingrese el precio"));
    const  nuevoProducto = new Producto(marca, valor,);
    arrayProductos.push(nuevoProducto);
    console.log("producto añadido al carrito");
}

function mostrarProductos(){
    arrayProductos.forEach((producto)=>{
        alert(`usted eligio un/unos ${producto.marca} por un precio de ${producto.valor}`)
    })
}


function finalizarCompra(){
    const total = arrayProductos.reduce ((acc, el)=> acc + el.valor, 0);
    alert (`gracias por su compra! el total a pagar es de ${total}`);
}

let arrayProductos = [];

let opcion = prompt(
    " Ingrese una opcion: \n 1: Buzos \n 2: Remeras \n 3: Buzos \n 4: Zapatillas \n 5: Mostrar Carrito \n 6: Salir"
);

while ( opcion !== "6"){
    if (opcion === "1"){
        cargarProducto(arrayProductos);
    }
    if (opcion === "2"){
        cargarProducto(arrayProductos);
    }
    if (opcion === "3"){
        cargarProducto(arrayProductos);
    }
    if (opcion === "4"){
        cargarProducto(arrayProductos);
    }
    if (opcion === "5"){
        mostrarProductos(arrayProductos);
    }
    if (opcion === "6"){
        finalizarCompra(arrayProductos);
    }
    opcion = prompt (
        "Vuelva a ingresar una opcion: \n 1: Buzos \n 2: Remeras  \n 3: Buzos \n 4: Zapatillas \n 5: Mostrar Carrito \n 6: Salir"
    );
}