// var traverseDomAndCollectElements = function (matchFunc, startEl = document.body,) {
//     // matchFunc -> (elemento) => `#${elemento.id}` === selector;
//     let resultSet = [];
//   // caso donde evaluo el elemento en donde estoy parado en este momento a ver si cumple o no con lo de matchFunc
//   if (matchFunc(startEl)) resultSet.push(startEl);
//   // voy a preguntar por los hijos
//   for (let i = 0; i < startEl.children.length; i++) {
//     const elem = startEl.children[i];
//     // en elem esta lo que el usuario esta buscando?
//     let result = traverseDomAndCollectElements(matchFunc, elem, resultSet);
//     // result -> [1,2,3,4,...[]]
//     resultSet = [...resultSet, ...result];
//   }
//   return resultSet;
// };  

var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];
  var stack = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  while (stack.length > 0) {
    var currentEl = stack.pop();

    if (matchFunc(currentEl)) {
      resultSet.push(currentEl);
    }
    var children = currentEl.children;
    for (var i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

// var selectorTypeMatcher = function (selector) {
//   // tu código aquí
//   if(selector[0] === "#") return "id";
//   if(selector[0] === ".") return "class";
//   if(selector.includes('.')) return "tag.class"
//   else return "tag";
// };

const selectorTypeMatcher = (selector) =>  
// tu código aquí 
selector[0] === "#" ? "id"
: selector[0] === "." ? "class"
: selector.includes(".") ? "tag class"
: "tag";


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

// const matchFunctionMaker = function (selector) {
//   let selectorType = selectorTypeMatcher(selector);
//   let matchFunction;
//   if (selectorType === "id") {
//     matchFunction = (elemento) => `#${elemento.id}` === selector;
//   } else if (selectorType === "class") {
//     matchFunction = (elemento) => {
//       for (const elem of elemento.classList) {
//         if (`.${elem}` === selector) return true;
//       }
//       return false;
//     };
//   } else if (selectorType === "tag.class") {
//     matchFunction = (elemento) => {
//       const [tag, clase] = selector.split(".");
//       return (
//         matchFunctionMaker(tag)(elemento) &&
//         matchFunctionMaker(`.${clase}`)(elemento)
//       );
//     };
//   } else if (selectorType === "tag") {
//     matchFunction = (elemento) => selector === elemento.tagName.toLowerCase();
//   }
//   return matchFunction;
// };

const matchFunctionMaker = (selector) => {

  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  return selectorType === "id"
    ? (matchFunction = (elemento) => `#${elemento.id}` === selector)
    : selectorType === "class"
    ? (matchFunction = (elemento) =>
        elemento.classList.some((elem) => `.${elem}` === selector))
    : selectorType === "tag.class"
    ? (matchFunction = (elemento) =>
        matchFunctionMaker(selector.split(".")[0])(elemento) &&
        matchFunctionMaker(`.${selector.split(".")[1]}`)(elemento))
    : (matchFunction = (elemento) =>
        selector === elemento.tagName.toLowerCase());
}; 

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  // selectorMatchFunc -> (elemento) => `#${elemento.id}` === selector;
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
