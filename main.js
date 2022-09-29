
    alert("Ahora calcularemos el promedio ponderado para alumno del ITT.");

let alum = Number(prompt("Ingrese la cantidad de alumnos"));
let contador = 1;
let credFund = 3.5;
let credBd = 4.5;
let credEtic = 3.5;
let resulf = 3.5;
let resulb = 4.0;
let resulet = 4.5;
while (contador <= alum) {
    contador ++;
    let nom = prompt("Ingrese su nombre");
    let fund = Number(prompt( nom  + " Ingrese la calificación que obtuvo en la  materia fundamentos"));
    let bd = Number(prompt( nom  + " Ingrese la calificación que obtuvo en la  materia BD"));
    let etica = Number(prompt( nom  + " Ingrese la calificación que obtuvo en la  materia Ética"));
    let resultcred = fund * credFund;
    let resultbd = bd * credBd;
    let resultetic = fund * credEtic;
    let summat = resultbd + resultcred + resultetic + resulb + resulet + resulf;
    let sumcred = credBd + credFund + credEtic;
    let totalfund = summat * credFund / sumcred;
    let totalBd = summat * credBd / sumcred;
    let totalEtic = summat * credEtic / sumcred;
            alert("El promedio de " +  nom + " en la materia de Fundamentos, es de: " + totalfund + "\n" + 
                    "El promedio de " +  nom + " en la materia de BD, es de: " + totalBd + "\n" +
                    "El promedio de " +  nom + " en la materia de Ética, es de: " + totalEtic);
    
}
