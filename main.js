
    alert("Ahora calcularemos el dinero que recibirá el vendedor a la semana");

let vendedor = Number(prompt("Ingrese la cantidad de vendedores"));
let sueldobase = 1000;
let contador = 1;
while (contador <= vendedor) {
    contador ++;
    let nom = prompt("Ingrese su nombre");
    let venta1 = Number(prompt( nom  + " Ingrese el dinero de su venta 1"));
    let venta2 = Number(prompt( nom  + " Ingrese el dinero de su venta 2"));
    let venta3 = Number(prompt( nom  + " Ingrese el dinero de su venta 3"));
    let comisiones = venta1 +  venta2 + venta3 * 0.10;
    let sueldototal = comisiones + sueldobase;
        alert("El sueldo de " +  nom + " es de: $" + sueldobase + " debido a qué hizo 3 ventas en la semana "  + "\n" + 
                "Su sueldo total es de: $" + sueldototal);
     
}
