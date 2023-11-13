const ladoUno = parseInt(prompt('Ingrese el valor de uno de lso lados del rectángulo'));
const ladoDos = parseInt(prompt('Ingrese el valor de uno de lso lados del rectángulo'));

const calcularPerimetro = (ladoA, ladoB) => {
    const perimetro = 2 * (ladoA + ladoB);
    console.log(`El perimetro es: ${perimetro}`)
}
calcularPerimetro(ladoUno, ladoDos)