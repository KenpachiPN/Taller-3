
let contador = 0;
    alert("Ahora calcularemos cuantos estudiantes no tienen derecho al exámen de nivelación");
while (contador < 5){
    contador ++;
    let nombre = prompt("Ingrese su nombre ");
    let nota1 = Number(prompt("Ingrese su nota #1 : " + nombre));
    let nota2 = Number(prompt("Ingrese su nota #2 : " + nombre));
    let nota3 = Number(prompt("Ingrese su nota #3 : " + nombre));
    let nota4 = Number(prompt("Ingrese su nota #4 : " + nombre));
    let nota5 = Number(prompt("Ingrese su nota #5 : " + nombre));
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
        alert("La nota promedio de " + nombre + " es de: "  + promedio);
    if( promedio >= 3.0) {
        alert(nombre + " tiene derecho a presentar el examen de nivelación :'D");
    }
    else{
        alert(nombre + " no tiene derecho a presentar el examen de nivelación :'(");
    }
    
}
