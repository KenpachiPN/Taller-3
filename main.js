

let gallinas = Number(prompt("Ingrese el número de gallinas que hay en la granja"));
let contador = 0;
while (contador < gallinas){
    contador ++;
        alert("¿Deseas saber la calidad para calcular su venta por kilo de huevo?");
    let peso = Number(prompt("Ingrese el peso de la gallina: " + contador));
    let altura = Number(prompt("Ingrese la altura de la gallina: " + contador + " en centimetros"));
    let huevos = Number(prompt("Ingrese el número de huevos que pone la gallina: " + contador));
    let calidad = (peso * altura) / huevos;
        alert("La calidad de la gallina es de: " + calidad + "\n" +
           "Ahora que sabes la calidad puedes calcular el precio de venta por kilo de huevos.");
    if(calidad >= 15){
        let prechuevo = 1.2 * calidad;
            alert("El precio de venta por kilo de huevo que tuvo la gallina: " + contador + " es de: $" + prechuevo + " por tener una calidad de: " + calidad);
    }
    else if (calidad > 8 ){
        let prechuevo = 1 * calidad;
            alert("El precio de venta por kilo de huevo que tuvo la gallina: " + contador + " es de: $" + prechuevo + " por tener una calidad de: " + calidad);
    }
    else {
        let prechuevo = .80 * calidad;
            alert("El precio de venta por kilo de huevo que tuvo la gallina: " + contador + " es de: $" + prechuevo + " por tener una calidad de: " + calidad);
    }
}