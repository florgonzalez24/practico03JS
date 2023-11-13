const tablaMultiplicar = () => {
    const numero = parseInt(prompt('Ingrese un número para conocer su tabla'))
    for (let i = 0; i <= 10; i++) {
      document.write(`${numero} x ${i} = ${numero * i} <br>`);
    }
};
    
 tablaMultiplicar();