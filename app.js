let opciones = prompt(`Ingrese un Numero para comprar:
1: "Remeras";
2: "Zapatillas"
3: "Pantalones"
4: "Buzos"
`);

    switch (opciones){
    case "1":{;
        console.log("Remeras");
        break
    }
    case "2":{
        console.log("Zapatillas");
        break
    }
    case "3":{
        console.log("Pantalones");
        break
    }

    case "4":{
        console.log("Buzos");
        break;
    }

    default: {
        console.log("No ingresaste una compra correctamente");
        break
    }
}
