let productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 12500,
        imagen: "./imagenes/a1.jpg"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 12800,
        imagen: "./imagenes/a2.jpg"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 13500,
        imagen: "./imagenes/a3.jpg"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 15000,
        imagen: "./imagenes/a4.jpg"
    },
];

const dibujarProductos = () => {
    let contenedor = document.getElementsById("container");
    Productos.forEach((producto,indice) =>{
    let card= document.createElement("div");
    card.classList.add("card" , "col-sm-12" , "col-lg-3");
    card.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btn btn-info" onClick="agregarAlCarrito()"  >Comprar</a>
    </div>`;
    contenedor.appendChild(card)
    });
}
    dibujarProductos();
    
    const agregarAlCarrito = () => {
        alert("Producto Agregado Al Carrito Correctamente");
    };