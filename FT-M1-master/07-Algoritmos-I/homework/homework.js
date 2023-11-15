'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

//   var array = [1];   //32 % 2 = 0   16 / 
//   var divisor = 2;   //32 / 2 = 16 

//   while (num > 1) {
//     if(num % divisor === 0){
//       array.push(divisor);
//       num /= divisor
//     }else{
//       divisor++;
//     }
//   }
//   return array;
// }

// console.log(factorear(32)); // [1, 2, ]

let factores = [1];

for(let i = 2; i < num; i++){
  let residuo = num % i;
  let cociente = num / i;
  if(residuo === 0){
    factores.push(i)
    num = cociente;
    i = i - 1;
  }
}
return factores;
}

console.log(factorear(180));


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let swap;

do {
  swap = false;
  for(let i = 0; i< array.length - 1; i++){
    if(array[i] > array[i + 1]){
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      swap = true
    }
  }
} while (swap);
return array;
}

console.log(bubbleSort([10, -2, -7, 4]));


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort([5, 1, 4, 2, 8]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let n = array.length; 

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; 
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; 
      }
    }
    if (minIndex != i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; 
    }
  }

  return array; 
}

console.log(selectionSort([5, 1, 4, 2, 8]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
