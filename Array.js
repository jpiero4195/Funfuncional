//Author: Jean Valencia
//fecha: 2024-07-06
/*
Funciones funcionales (Array)
*/

const edades = [17,22,15,18,20,21,16,25];

// Imprime el array
function ImprimieArray(edades){
    for (let i = 0; i < edades.length; i++) {
        console.log(edades[i]);
    }
}
console.log('Imprimiendo el array', edades);
ImprimieArray(edades);

// Imprime el array edades multiplicado X 10
edades.forEach( (edad) => {
    console.log(edad*10);
});

//Diseñe la función anónima que imprima un array
const ImpVector = ( (vector) => {
    vector.forEach( item => {
        console.log(`Imprimiendo elemento ${item}`);
    })
});

const temperatura = [23,25.6,30,28.9,22.55];
const nombres = ['Juan','Ana','Pedro','María','Andrés','Martha','Luis'];
ImpVector(temperatura);
ImpVector(nombres);
ImpVector(edades);

//poner dentro de un array una función
const mensajes = [
    'Hola', // 0
    'Hasta pronto',// 1
    'Buenos días',// 2
    'Buen fin de semana',// 3
    'Bienvenidos',// 4
    function saludos(){// 5
        console.log('La functión está dentro del array!!');
    },
    function hola (nombre){
        //Con los elementos 5 primeros elmentos, salude ala persona, y luego despidase
        console.log(`Hola ${nombre}, ${this[2]}, ${this[3]} ${this[1]}`);
    },
    (nombre, vector) => {
        console.log(`Hola ${vector[2]} ${nombre}, te deseo ${vector[3]} ${vector[1]}`);
    },
    //Diseñe la funcion que imprima, usando un bucle, los 5 primero elementos del vector
    (vector) => {
        for (let i = 0; i < 5; i++) {
            console.log(vector[i]);
        }
    }
];

console.log('Imprimiendo elementos del array del mensajes:');
console.log(mensajes[0]);
//llame la función que se encuentra dentro del array "mensajes"
mensajes[5]();
mensajes[6]('Jean');
mensajes[7]('Ana',mensajes);
mensajes[8](mensajes);