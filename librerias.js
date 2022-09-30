let boton = document.getElementById("boton")
boton.addEventListener(`click`, botonFuncion);

function botonFuncion (){
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Has agregado correctamente el producto al carrito!',
    showConfirmButton: false,
    timer: 1500
})
console.log(boton)
}
