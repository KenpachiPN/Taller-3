
alert("Ahora calcularemos un algoritmo que determine el resultado de la elección del representante estudiantil de la universidad X, para ello se presentaron tres candidatos A, B, y C..");

var a, b, c, can, con, rep, tota, totb, totc;
con = 1;
a = 0;
b = 0;
c = 0;
can = Number(prompt("Digite la cantidad de alumnos que van a votar"));

while (con <= can) {
    rep = Number(prompt("Digite el representante por el que va a votar (A o B): "));
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
    alert("El porcentaje de la votacion del representante A es", tota);
    alert(" El porcentaje de la votacion del representante B es", totb);
    calert("El porcentaje de la votacion del representante C es", totc);
} else {
    if (totb > tota && totb > totc) {
        alert("El porcentaje de la votacion del representante A es", tota);
        alert("El porcentaje de la votacion del representante B es", totb);
        alert("El porcentaje de la votacion del representante C es", totc);
    } else {
        if (totc > tota && totc > totb) {
            alert("El porcentaje de la votacion del representante A es", tota);
            alert("El porcentaje de la votacion del representante B es", totb);
            alert("El porcentaje de la votacion del representante C es", totc);
        } else {
            if (totb === tota && totb === totc) {
                alert("SE CANCELAN ELECCIONES DE REPRESENTANTE");
            } else {
                if (tota >= totb && totb > totc) {
                    con = 1;
                    a = 0;
                    b = 0;
                    alert("HAY UN EMPATE ENTRE A Y B");
                    can = Number.parseInt(input("Digite la cantidad de alumnos que van a votar: "));

                    while (con <= can) {
                        con += 1;
                        rep = Number(prompt("Digite el representante por el que va a votar (A o B): "));

                        if (rep === "A") {
                            a += 1;
                        } else {
                            b += 1;
                        }
                    }

                    tota = a / can * 100;
                    totb = b / can * 100;

                    if (tota >= 51) {
                        alert("El ganador de las votaciones es A con un", tota);
                    } else {
                        if (totb >= 51) {
                            alert("El ganador de las votaciones es B con un", totb);
                        } else {
                            alert("DOBLE EMPATE ENTRE A Y B");
                        }
                    }
                } else {
                    if (tota >= totc && totc > totb) {
                        con = 1;
                        a = 0;
                        c = 0;
                        alert("HAY UN EMPATE ENTRE A Y C");
                        can = Number.parseInt(input("Digite la cantidad de alumnos que van a votar: "));

                        while (con <= can) {
                            con += 1;
                            rep = Number(prompt("Digite el representante por el que va a votar (A o B): "));

                            if (rep === "A") {
                                a += 1;
                            } else {
                                c += 1;
                            }
                        }

                        tota = a / can * 100;
                        totc = c / can * 100;

                        if (tota >= 51) {
                            alert("El ganador de las votaciones es A con un", tota);
                        } else {
                            if (totc >= 51) {
                                alert("El ganador de las votaciones es C con un", totc);
                            } else {
                                alert("DOBLE EMPATE ENTRE A Y C");
                            }
                        }
                    } else {
                        con = 1;
                        b = 0;
                        c = 0;
                        alert("HAY UN EMPATE ENTRE B Y C");
                        can = Number.parseInt(input("Digite la cantidad de alumnos que van a votar: "));

                        while (con <= can) {
                            con += 1;
                            rep = Number(prompt("Digite el representante por el que va a votar (A o B): "));

                            if (rep === "B") {
                                b += 1;
                            } else {
                                c += 1;
                            }
                        }

                        totb = b / can * 100;
                        totc = c / can * 100;

                        if (totb >= 51) {
                            alert("El ganador de las votaciones es B con un", totb);
                        } else {
                            if (totc >= 51) {
                                alert("El ganador de las votaciones es C con un", totc);
                            } else {
                                alert("DOBLE EMPATE ENTRE B Y C");
                            }
                        }
                    }
                }
            }
        }
    }
}
