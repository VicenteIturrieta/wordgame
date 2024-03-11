/*let words = [
    {
        word: "apple"
    },
    {
        word: "potato"
    },
    
];*/

// Importa la librería random-words
const randomWords = require('random-words');

// Genera un arreglo de objetos con palabras al azar
let words = randomWords({ exactly: 10 }).map(word => ({ word }));
// Esto generará un arreglo de 10 objetos, cada uno con una palabra al azar.

module.exports = words;
