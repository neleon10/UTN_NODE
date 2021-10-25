const {crearArchivo} = require('./helpers/multiplicar.js');

console.clear();

crearArchivo(556)
//promises
.then( caca => console.log (caca, 'creado de manera perfecta'))
.catch ( err => console.log (err));


