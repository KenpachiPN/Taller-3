

let contador = 0;
while (contador < 10){
    contador ++;
        alert("Ahora haremos operaciones matemáticas básicas");
    let num1 = Number(prompt("Ingrese el número: " + contador));
    let num2 = Number(prompt("Ingrese el número: " + contador));
    let suma = num1 + num2;
        alert("La suma de: " + num1 + " y " + num2 + " es de: " + suma);
    let resta = num1 - num2;
        alert("La resta de: " + num1 + " y " + num2 + " es de: " + resta);
    let multi = num1 * num2;
        alert("La multiplicación de: " + num1 + " y " + num2 + " es de: " + multi);
    let divis = num1 - num2;
        alert("La división de: " + num1 + " y " + num2 + " es de: " + divis);
}