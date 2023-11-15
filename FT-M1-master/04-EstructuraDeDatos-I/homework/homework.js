'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado
como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 
5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, 
como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia 
será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir 
funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n === 1){
    return 1;
  }
  var factorial = n * nFactorial(n - 1);
  return factorial;
}

console.log(nFactorial(1));


function nFibonacci(n) {

  if(n <= 1){
    return n;
  }
  if(n > 1){
    var pocision = nFibonacci(n - 1);
    var pocision1 = nFibonacci(n - 2);
    var fibonacci = pocision + pocision1;
  }
  return fibonacci;
}

console.log(nFibonacci(7));

// function nFibonacci(n, cache = {}) {

//   if (n === 0 || n === 1) {
//   return n;
// }  
//   if (!cache.hasOwnProperty(n)) {
//     var fibo1 = nFibonacci(n - 1, cache);
//     var fibo2 = nFibonacci(n - 2, cache);
//     var fibo = fibo1 + fibo2;
//     cache[n] = fibo;
//   }
//   return cache[n];
// }

// console.log(nFibonacci(7));


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// function Queue() {
//   this.fila = []
// }

// Queue.prototype.enqueue = function (elem) {
//   this.fila.push(elem)
// }

// Queue.prototype.dequeue = function () {
//   return this.fila.shift()
// }

// Queue.prototype.size = function () {
//   return this.fila.length
// } 

// const obj = new Object();
// console.log(obj);

// notacion de clase

class Queue {
  constructor() {
    this.fila = [];
  }
  enqueue(el) {
    this.fila.push(el);
  }
  dequeue() {
    return this.fila.shift();
  }
  size() {
    return this.fila.length;
  }
}
const queue = new Queue();
console.log(queue.size());
console.log(queue.enqueue());
console.log(queue.enqueue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);



/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
