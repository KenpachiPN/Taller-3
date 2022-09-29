
alert("Ahora calcularemos un algoritmo en el Depto. de Seguridad Pública y Transito de desea saber de los n autos que entran a la ciudad de Bogotá.");
let vehiculos = Number(prompt("Digite la cantidad de vehiculos que ingresaron a Bogotá"));
let contador = 1;
while (contador <= vehiculos) {
    contador ++;
    let placa = Number(prompt("Digite el último digito de la placa"));
    if (placa == "1" || placa == "2") {
        alert("Su calcomania es Amarilla");
    }
    else if (placa == "3" || placa == "4") {
        alert("Su calcomania es Rosa");
    }
    else if (placa == "5" || placa == "6") {
        alert("Su calcomania es Roja");
    }
    else if (placa == "7" || placa == "8") {
        alert("Su calcomania es Verde");
    }
    else if (placa == "9" || placa == "0") {
        alert("Su calcomania es Azul");
    }
    else {
        alert("Error al digitar");
    }
}