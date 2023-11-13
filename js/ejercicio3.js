function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

let sumaResultados = [];

for (let i = 0; i < 50; i++) {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;

    if (sumaResultados[suma] === undefined) {
        sumaResultados[suma] = 1;

    } else {
        sumaResultados[suma]++;
    }
}

console.log("Suma\tApariciones");
for (let j = 2; j <= 12; j++) {
    console.log(j + "\t" + (sumaResultados[j] || 0));
}