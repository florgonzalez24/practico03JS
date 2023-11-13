const cadenaTexto = (texto) => {
    if(texto === texto.toUpperCase()) {
        alert(`El texto: ${texto}. Solo tiene MAYÚSCULAS`)
    } else if(texto === texto.toLowerCase()) {
        alert(`El texto: ${texto}. Solo tiene MINÚSCULAS`)
    } else {
        alert(`El texto: ${texto}. Es una combinación de las dos.`)
    }
}

const cadenaIngresada = prompt('Ingrese una frase')

cadenaTexto(cadenaIngresada)