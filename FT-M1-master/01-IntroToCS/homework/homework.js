'use strict';

function BinarioADecimal(num) {
   var reverse = num.split("").reverse().join("");  
   var base = 2; 
   var decimal = 0;
   var suma = 0;

   for(var i = 0; i < reverse.length; i++){
      suma = reverse[i] * base ** i; 
      decimal += suma;
   }
   return decimal;
}

console.log(BinarioADecimal("10"));

function DecimalABinario(num) {
   var binario = ""; 
   var cociente = 0; 
   var resto = 0;

   while (num > 0) {
      cociente = Math.floor(num / 2);
      resto = num % 2;
      binario = resto.toString() + binario;
      num = cociente
   }
   return binario;
}

console.log(DecimalABinario(8));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
