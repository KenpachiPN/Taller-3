
alert("Ahora calcularemos un algoritmo  se está realizando un estudio del tráfico en una de las calles de su ciudad.");

var aut, cam, con, mot, per, pert, tip, tur, veh;
veh = 4;
tur = 0;
pert = 0;
aut = 0;
cam = 0;
mot = 0;
con = 1;

while (con <= veh) {
  tip = Number(prompt("Ingrese el Tipo de vehiculo que pasa(turismo, autobus, camion o Motocicleta."));
  con += 1;

  if (tip === "turismo") {
    per = Number(prompt("Cantidad de personas:"));
    tur += 1;
    pert = per + pert;
  } else {
    if (tip === "Autob\u00fas") {
      aut += 1;
    } else {
      if (tip === "Cami\u00f3n") {
        cam += 1;
      }
    }
  }

  if (tip === "Moto") {
    mot += 1;
  }
}

alert("Cantidad de autobuses", aut);
alert(" Cantidad de camiones", cam);
alert("Cantidad de motocicletas", mot);
alert(" Cantidad de turismo", tur);
alert("Cantidad de personas en vehiculos de turismo", pert);
