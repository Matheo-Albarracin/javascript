let productos = [
    {id: "1", nombre: "Zapatillas Rojas", precio: 15000, img: "./imagenes/a1.jpg"},
    {id: "2", nombre: "Zapatillas Adidas", precio: 12500, img: "./imagenes/a2.jpg"},
    {id: "3", nombre: "Zapatillas Negras", precio: 13500, img: "./imagenes/a3.jpg"},
    {id: "4", nombre: "Zapatillas Rojas", precio: 10500, img: "./imagenes/a4.jpg"},
];

const guardarProductos = (clave, valor) => { localStorage.setItem(clave, valor)}
for (const producto of productos) {
    guardarProductos (producto.id, JSON.stringify(producto))
}

const recorrerProductos = ()=> {
    let contenedor = document.getElementById("container")
    productos.forEach((producto,indice)=>{
        let card = document.createElement("div")
        card.classList.add("card", "col-sm-8", "col-lg-3",);
        card.innerHTML = `<img src="${producto.img}"" class="card-img-top" alt="...">
        <h5 class="card-title">"${producto.nombre}"</h5>
        <div class="card-body">
        <p class="card-text">"${producto.precio}"</p>
        <a href="#" class="btn btn-primary" onClick="agregarAlCarrito(${indice})">Comprar</a>
        </div>`;
        contenedor.appendChild(card)
        })
    }

    recorrerProductos();
    let carrito = [];

    const agregarAlCarrito = (indice) => {
        const indiceEncontradoCarrito = carrito.findIndex((elemento) =>{
            return elemento.id === productos[indice].id
        })
        if(indiceEncontradoCarrito === -1){
            const productoAgregar = productos[indice]
            productoAgregar.cantidad = 1;
            carrito.push(productoAgregar)
            dibujarCarrito();
        }else {
            carrito[indiceEncontradoCarrito].cantidad +=1;
            dibujarCarrito()
        }
    };

    const modalCarrito = document.querySelector('#carrito')

    let total = 0;
    const dibujarCarrito= ()=> {
        modalCarrito.className="carrito";
        modalCarrito.innerHTML=""
        if(carrito.length > 0){
            carrito.forEach((producto, indice) => {
                total = total + producto.precio * producto.cantidad
                const carritoContainer = document.createElement("div")
                carritoContainer.className = "producto-carrito"
                carritoContainer.innerHTML = `
                <img class = "car-img" src="${producto.img}"/>
                <div class="product-details">
                ${producto.nombre}
                </div>
                <div class="product-details"> Cantidad: ${producto.cantidad}</div>
                <div class="product-details"> Precio: ${producto.precio}</div>
                <div class="product-details"> Total: ${producto.precio * producto.cantidad}</div>
                <button class="btn btn-info" id="remove-product" onClick="removeProduct(${indice})">Eliminar Producto</button>
                `
                modalCarrito.appendChild(carritoContainer)
            })
            const totalContainer = document.createElement("div");
            totalContainer.className="total-carrito";
            totalContainer.innerHTML= `<div class= "total"> TOTAL $ ${total}</div>
            <button class= "btn btn-info finaliar" id="finalizar" onClick="finalizarCompra()">
            `
            modalCarrito.appendChild(total-carrito)
        }else {
            modalCarrito.classList.remove("carrito")
        }
    }

    const removeProduct= (indice) => {
        carrito.splice(indice,1);
        dibujarCarrito();
    };
    const finalizarCompra = () => {
        const total = document.getElementsByClassName("total")[0].innerHTML;
        modalCarrito.innerHTML = "";
        const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> LA COMPRA HA FINALIZADO, EL TOTAL ES ${total} </div>
        `
        modalCarrito.innerHTML = compraFinalizada
    }