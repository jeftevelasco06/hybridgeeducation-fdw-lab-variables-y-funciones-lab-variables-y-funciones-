// Ejercicio 10: Inversión de una Cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join(''); // Convierte en array, invierte y une de nuevo
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};

