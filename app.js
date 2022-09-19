let productos = [
    {id: "1", nombre: "Zapatillas Rojas", precio: 15000, img: "./imagenes/a1.jpg"},
    {id: "2", nombre: "Zapatillas Adidas", precio: 12500, img: "./imagenes/a2.jpg"},
    {id: "3", nombre: "Zapatillas Negras", precio: 13500, img: "./imagenes/a3.jpg"},
    {id: "4", nombre: "Zapatillas Rojas", precio: 10500, img: "./imagenes/a4.jpg"},
];

const recorrerProductos = ()=> {
    let contenedor = document.getElementById("container")
    productos.forEach((producto,indice)=>{
        let card = document.createElement("div")
        card.classList.add("card", "col-sm-8", "col-lg-3",);
        card.innerHTML = `<img src="${producto.img}"" class="card-img-top" alt="...">
        <h5 class="card-title">"${producto.nombre}"</h5>
        <div class="card-body">
        <p class="card-text">"${producto.precio}"</p>
        <a href="#" class="btn btn-primary" onClick="seleccionarAlCarrito()">Comprar</a>
        </div>`;
        contenedor.appendChild(card)
        })
    }

    recorrerProductos();

    const seleccionarAlCarrito = () => {
        alert("producto seleccionado al carrito")
    }