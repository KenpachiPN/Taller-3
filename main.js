
alert("Ahora calcularemos un algoritmo que determine el resultado de la elección del representante estudiantil de la universidad X, para ello se presentaron tres candidatos A, B, y C..");

var a, b, c, can, con, rep, tota, totb, totc;
con = 1;
a = 0;
b = 0;
c = 0;
can = Number.parseInt(input("Digite la cantidad de alumnos que van a votar"));

while (con <= can) {
    rep = input("Digite el representante por el que va a votar (A,B o C):");
    con += 1;

    if (rep === "A") {
        a += 1;
    } else {
        if (rep === "B") {
            b += 1;
        } else {
            c += 1;
        }
    }
}

tota = a / can * 100;
totb = b / can * 100;
totc = c / can * 100;

if (tota > totb && tota > totc) {
    console.log("El porcentaje de la votacion del representante A es", tota);
    console.log(" El porcentaje de la votacion del representante B es", totb);
    console.log("El porcentaje de la votacion del representante C es", totc);
} else {
    if (totb > tota && totb > totc) {
        console.log("El porcentaje de la votacion del representante A es", tota);
        console.log("El porcentaje de la votacion del representante B es", totb);
        console.log("El porcentaje de la votacion del representante C es", totc);
    } else {
        if (totc > tota && totc > totb) {
            console.log("El porcentaje de la votacion del representante A es", tota);
            console.log("El porcentaje de la votacion del representante B es", totb);
            console.log("El porcentaje de la votacion del representante C es", totc);
        } else {
            if (totb === tota && totb === totc) {
                console.log("SE CANCELAN ELECCIONES DE REPRESENTANTE");
            } else {
                if (tota >= totb && totb > totc) {
                    con = 1;
                    a = 0;
                    b = 0;
                    console.log("HAY UN EMPATE ENTRE A Y B");
                    can = Number.parseInt(input("Digite la cantidad de alumnos que van a votar: "));

                    while (con <= can) {
                        con += 1;
                        rep = input("Digite el representante por el que va a votar (A o B): ");

                        if (rep === "A") {
                            a += 1;
                        } else {
                            b += 1;
                        }
                    }

                    tota = a / can * 100;
                    totb = b / can * 100;

                    if (tota >= 51) {
                        console.log("El ganador de las votaciones es A con un", tota);
                    } else {
                        if (totb >= 51) {
                            console.log("El ganador de las votaciones es B con un", totb);
                        } else {
                            console.log("DOBLE EMPATE ENTRE A Y B");
                        }
                    }
                } else {
                    if (tota >= totc && totc > totb) {
                        con = 1;
                        a = 0;
                        c = 0;
                        console.log("HAY UN EMPATE ENTRE A Y C");
                        can = Number.parseInt(input("Digite la cantidad de alumnos que van a votar: "));

                        while (con <= can) {
                            con += 1;
                            rep = input("Digite el representante por el que va a votar (A o C): ");

                            if (rep === "A") {
                                a += 1;
                            } else {
                                c += 1;
                            }
                        }

                        tota = a / can * 100;
                        totc = c / can * 100;

                        if (tota >= 51) {
                            console.log("El ganador de las votaciones es A con un", tota);
                        } else {
                            if (totc >= 51) {
                                console.log("El ganador de las votaciones es C con un", totc);
                            } else {
                                console.log("DOBLE EMPATE ENTRE A Y C");
                            }
                        }
                    } else {
                        con = 1;
                        b = 0;
                        c = 0;
                        console.log("HAY UN EMPATE ENTRE B Y C");
                        can = Number.parseInt(input("Digite la cantidad de alumnos que van a votar: "));

                        while (con <= can) {
                            con += 1;
                            rep = input("Digite el representante por el que va a votar (B o C): ");

                            if (rep === "B") {
                                b += 1;
                            } else {
                                c += 1;
                            }
                        }

                        totb = b / can * 100;
                        totc = c / can * 100;

                        if (totb >= 51) {
                            console.log("El ganador de las votaciones es B con un", totb);
                        } else {
                            if (totc >= 51) {
                                console.log("El ganador de las votaciones es C con un", totc);
                            } else {
                                console.log("DOBLE EMPATE ENTRE B Y C");
                            }
                        }
                    }
                }
            }
        }
    }
}
