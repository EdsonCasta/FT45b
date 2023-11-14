'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro 
  ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(data) {
   this.value = data;
   this.left = null;
   this.rigth = null;
}

BinarySearchTree.prototype.size = function () {
   let count = 1;
   console.log(count);
   if (this.left) count += this.left.size();
   if (this.right) count += this.right.size();
   return count;
}

BinarySearchTree.prototype.insert = function(elemento){
   let subTree = new BinarySearchTree(elemento);

   if (elemento < this.value) {
      if (!this.left) {
        this.left = subTree;
        return subTree;
      } else {
        this.left.insert(elemento);
      }
   } else if (elemento > this.value) {
      if (!this.right) {
        this.right = subTree;
        return subTree;
      } else {
        this.right.insert(elemento);
      }
   }
}

BinarySearchTree.prototype.contains = function (elem) {
   if (elem === this.value){ 
      return true;
   }   
   if (elem < this.value) {
     if (!this.left){ 
      return false;
     }else { 
      return this.left.contains(elem);
     }
   }else {
     if (!this.right){ 
      return false;
     }else { 
      return this.right.contains(elem);
     }
   }
 };

 BinarySearchTree.prototype.depthFirstForEach = function (
   cb,
   order = "in-order"
 ) {
   if (typeof cb !== "function") throw TypeError("Must be a function");
   switch (order) {
     case "pre-order":
       cb(this.value);
       if (this.left) this.left.depthFirstForEach(cb, order);
       if (this.right) this.right.depthFirstForEach(cb, order);
       break;
     case "post-order":
       if (this.left) this.left.depthFirstForEach(cb, order);
       if (this.right) this.right.depthFirstForEach(cb, order);
       cb(this.value);
       break;
     case "in-order":
       if (this.left) this.left.depthFirstForEach(cb, order);
       cb(this.value);
       if (this.right) this.right.depthFirstForEach(cb, order);
       break;
     default:
       return "No conozco ese orden";
   }
 };

 BinarySearchTree.prototype.breadthFirstForEach = function (cb, memoria = []) {
   cb(this.value);
   if (this.left) memoria.push(this.left);
   if (this.right) memoria.push(this.right);
   if(memoria.length) memoria.shift().breadthFirstForEach(cb, memoria)
}; 
 

let myTree = new BinarySearchTree(20);
console.log(myTree);
myTree.insert(15);
myTree.insert(17);
myTree.insert(25);
myTree.insert(25);
myTree.insert(18);
console.log(myTree.contains(18));
console.log(myTree.size());
console.log(myTree);


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
