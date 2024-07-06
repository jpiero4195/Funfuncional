//Author: Jean Valencia
//fecha: 2024-07-06
/*
Funciones funcionales (Array - Ordenar)
*/
//ordenar un vector
function ordenarVector(vector) {
    var i, j, aux;
    for (i = 0; i < vector.length; i++) {
        for (j = i + 1; j < vector.length; j++) {
            if (vector[i] > vector[j]) {
                aux = vector[i];
                vector[i] = vector[j];
                vector[j] = aux;
            }
        }
    }
    return vector;
}


let edades=[20,10,16,8,5,100,15,1,43,77];

function OrdenarVector(vector){
    for(let i=0; i<vector.length; i++){
        for(let j=i+1; j<vector.length; j++){
            if(vector[i]>vector[j]){
                let aux=vector[i];
                vector[i]=vector[j];
                vector[j]=aux;
            }
        }
    }
}
OrdenarVector(edades);
console.log(edades);

let edades2=[20,10,16,8,5,100,15,1,43,77];
//use el metodo sort para ordenar el vector
edades2.sort(function(a,b){return a-b});
edades2.sort((a,b)=>a-b);
console.log(edades2);

