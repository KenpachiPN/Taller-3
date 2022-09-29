

let contador = 0;
    alert("Ahora calcularemos la nota promedio de 5 estudiantes");
while (contador < 5){
    contador ++;
    let nombre = prompt("Ingrese su nombre ");
    let apellido = prompt("Ingrese su apellido: " + nombre);
    let edad = Number(prompt("Ingrese el edad : " + nombre));
    let nota1 = Number(prompt("Ingrese su nota #1 : " + nombre));
    let nota2 = Number(prompt("Ingrese su nota #2 : " + nombre));
    let nota3 = Number(prompt("Ingrese su nota #3 : " + nombre));
    let promedio = nota1 + nota2 + nota3 / 3;
            alert("La nota promedio de: " + nombre + " es de: "  + promedio);
    
}
