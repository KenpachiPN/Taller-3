
    alert("Ahora calcularemos la distancia que separa al avión del proyectil, hasta que estén a 10,000 mtrs. o más");
    let segundos = 0;
    let avion = 222222;
    let misil = 222222;
    let acel = 20;
    let acem = 10;
while (acel - acem <= 10000){
    segundos ++;
    acel += 20 + acel
    acem += 10 + acem
        alert("En " + segundos + " Segundos");
        alert("La distancia del avion es: " + acel);
        alert("La distancia del misil es: " + acem);
}
