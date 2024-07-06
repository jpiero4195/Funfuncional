//Author: Jean Valencia
//fecha: 2024-07-06
/*
Funciones funcionales (Objetos)
*/

const Estudiantes = {
    nombre: "Jean",
    apellido: "Valencia",
    edad: 24,
    curso: "Desarrollo de Software",
    maticulado : true,
    pesoEnkf : 72.67,
    MayorEdad(){
        if(this.edad >= 18){
            console.log(`${this.nombre} eres mayor de edad`);
        }else{
            console.log(`${this.nombre} eres menor de edad`);
        }
        //return edad >= 18 ? true : false;
    },
    TieneSobre(peso){
        if(peso>= 80){
            console.log(`${this.nombre} tienes sobrepeso. Debes hacer ejercicios`);
        }else{
            console.log(`${this.nombre} tienes un peso normal`);
        }

    }
};

console.log("Datos del estudiante ", Estudiantes);
console.log(`El nombre del estudainte es ${Estudiantes.nombre} ${Estudiantes.apellido}`);
Estudiantes.MayorEdad();
Estudiantes.TieneSobre(Estudiantes.peso);
