// Scope & Hoisting

// Ejercicio 1 

// C.G = F.C => L.E == (a=5, b=10, c=fn, x=1)
//       F.E => log(b), log(x), c=fn === C.L = F.C => L.E == (a=8, b=9, c= 10, x=10, f=fn)
//                             F.E => log(x), log(a), log(b) f=fn === C.L = F.C => L.E == (a=8, b=10, c=10, x=5)
//                                                                          F.E => log(b)

x = 1;                                        
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1

// impreso en la consola => 10, 8, 8, 9, 10, 1


// Ejercicio 2 

// C.G = F.C => L.E == (foo=fn, bar=und, baz=2)
//       F.E => foo=fn === C.l = F.C => L.E == ()
//                               F.E => log('hola!')

console.log(bar); // undefined
baz = 2;
console.log(baz); // 2
foo();
function foo() {
   console.log('Hola!'); // hola!
}
var bar = 1;

// impreso en la consola => undefined, 2, hola!

// Ejercicio 3

// C.G = F.C => L.E == (instructor='Franco')
//       F.E => log(instructor)

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco

// impreso en la consola => Franco

// Ejercicio 4

// C.G = F.C => L.E == (instructor='Tony')
//       F.E => log(intructor), log(instructor), fn === C.L = F.C => L.E == (instructor='Franco')
//                                                            F.E => log(instructor)

var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony

// impreso en la consola => Tony, Franco, Tony

// Ejercicio 5

// C.G = F.C => L.E == (instructor='The Flash', pm='Franco')(pm=Reverse Flash)
//       F.E => log(instructor), log(pm)

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco

// impreso en la consola => The Flash, Reverse Flash, The Flash, Franco

// Coerción de Datos

// Ejercicio 1

6 / "3"           // 6 / 3 = 2
"2" * "3"         // 2 * "3" => 2 * 3 = 6
4 + 5 + "px"      // 9 + "px" => "9" + "px" = "9px"
"$" + 4 + 5       // "$" + "4" => "$4" + 5 => "$4" + "5" = "$45"
"4" - 2           // 4 - 2 = 2
"4px" - 2         // "4px" - "2" = NaN
7 / 0             // Infinity
{}[0]             // undefined
parseInt("09")    // 9
5 && 2            // true && true = 2
2 && 5            // true && true = 5
5 || 0            // true = 5
0 || 5            // false || true = 5
[3]+[3]-[10]      // "3" + [3] => "3" + "3" => "33" - [10] => "33" - "10" => 33 - "10" => 33 - 10 = 23
3>2>1             // 3 > 2 => true > 1 => 1 > 1 = false
//[] == ![]       // [] == false => [] == 0 => "" == 0 => 0 == 0 = true


// Hoisting

// Ejercicio 1

// C.G = F.C => L.E == (test=fn)
//       F.E => test=fn === C.L = F.C => L.E == (a=und, foo=fn)
//                                F.E => log(foo())

function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test(); 

 // Salida Consola => undefined, 2


 // Ejercicio 2

 // G.C = F.C => L.E == (snack=und, getfood=fn)
 //       F.E => getfood=fn === C.L = F.C => L.E == (food=false, snack=und)
 //                                   F.E => getFood(false)

 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack; // undefined
}

getFood(false);

// Salida Consola => undefined


// ### This

// Ejercicio 1

//

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined

// Salida Consola =>  Aurelio De Rosa, undefined


// Event loop

// Ejercicio 1

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();

 // orden que se muestra en consola => 1, 4, 3, 2