'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array <= 1){ 
    return array;
  }
  
  let pivot = array[Math.floor(array.length / 2)]; 
  let arrayMenor = []; 
  let arrayMayor = []; 
  let pivotIgualado = []; 
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      arrayMenor.push(array[i]);
    } else if (array[i] > pivot) {
      arrayMayor.push(array[i]);
    } else {
      pivotIgualado.push(array[i]);
    }
  }
  return quickSort(arrayMenor).concat(pivotIgualado, quickSort(arrayMayor));


//     var result = [];

//     if (array.length <= 1) {
//       return array;
//     }

//     let mitad = ~~(array.length / 2)
//     let pivote = [array[mitad]]
//     let derecha = []
//     let izquierda = []
//     for (let i in array) {
//       if (i == mitad) continue;
//       if (array[i] > array[mitad]) {
//         derecha.push(array[i]);
//       } if (array[i] < array[mitad]) {
//         izquierda.push(array[i]);
//       } if (array[i] === array[mitad]) {
//         pivote.push(array[i]);
//       }
//     }
//     let izqRec = result.concat(quickSort(derecha));
//     let derRec = result.concat(quickSort(izquierda));
//     return (derRec.concat(pivote)).concat(izqRec);
}

console.log(quickSort([5, 1, 4, 2, 8]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  function merge(left, right) {
    if (!left.length) {
      return right;
    }
    if (!right.length) {
      return left;
    }

    if (left[0] < right[0]) {
      return [left[0]].concat(merge(left.slice(1), right));
    } else {
      return [right[0]].concat(merge(left, right.slice(1)));
    }
  }
  return merge(mergeSort(left), mergeSort(right));


//   if(array.length === 1) return array;

//   let middle = Math.floor(array.length / 2); 
//   let left = array.slice(0, middle);  
//   let right = array.slice(middle); 

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let mergedArray = [];

//   while(leftIndex < left.length && rightIndex < right.length) {
//     if(left[leftIndex] < right[rightIndex]) {
//       mergedArray.push(left[leftIndex]);
//       leftIndex++
//     } else {
//       mergedArray.push(right[rightIndex]);
//       rightIndex++
//     }
//   }
//   return mergedArray

//   .concat(left.slice(leftIndex))
//   .concat(right.slice(rightIndex));

  //okey probemos ahora
}

console.log(mergeSort([5, 1, 4, 2, 8]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
