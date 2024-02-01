const levelOne = (a, b) => a + b;

const levelTwo = (letras) => {
    if(letras.length < 2) return letras;
    if(letras.length === 2) return letras[0];
    // let resutado = "";
    // for (let i = 0; i < letras.length; i++) {
    //     i % 2 === 0 
    //     ? resutado += letras[i]
    //     : null
    // }
    // return resutado;
    return letras
    .split("")
    .filter((letter, i) => i % 2 === 0)
    .join("")
};

const levelThree = (a, b) => [...a, ...b].sort();

const levelFour = (num) => {
    let total = 0;
    num
    .toString()
    .split("")
    .forEach(num => total += Number(num))
let reverse = total.toString().split("").reverse().join("")
if(reverse * total === num) return true
else return false
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
