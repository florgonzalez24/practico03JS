const ciudades = [];

while (true) {
  let nombreCiudad = prompt("Introduce el nombre de una ciudad");
  if (nombreCiudad === null) {
    confirm("¿Desea ver el listado de paises?");
    break;
  }
  ciudades.push(nombreCiudad);
}

console.log(ciudades);

document.write(`El arreglo tiene ${ciudades.length} ciudades.`);

document.write(`<ul>`);
document.write(`<li>La primera ciudad ingresada es ${ciudades[0]}</li>`);
document.write(`<li>La tercera ciudad ingresada es ${ciudades[2]}</li>`);
document.write(`<li>La última ciudad ingresada es ${ciudades[ciudades.length - 1]}</li>`);
document.write(`</ul`);

//agrego Paris en la ultima posicion
ciudades.push('París');

document.write(`La segunda ciudad ingresada es ${ciudades[1]}`);

ciudades[1] = 'Barcelona';

document.write('<h2>Ciudades actualizadas: </h2>');

document.write(`<ol>`);

for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}

document.write(`</ol`);
