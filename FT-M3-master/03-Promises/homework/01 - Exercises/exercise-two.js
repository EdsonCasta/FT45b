"use strict";

const { error } = require("console");
let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });

  // promise version
  // Tu código acá:
  const promiseOne = exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt")
  .then(stanza1 => exerciseUtils.blue(stanza1))

  const promiseTwo = exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt")
  .then(stanza2 => exerciseUtils.blue(stanza2))

  Promise.all([promiseOne, promiseTwo])
  .finally(() => console.log("done"))
}

function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  });

  // promise version
  // Tu código acá:
  // filenames.forEach(filenames => 
  //   exerciseUtils.promisifiedReadFile(filenames)
  //   .then(stanza => exerciseUtils.blue(stanza))
  //   .catch(err => exerciseUtils.magenta(new Error(err))) 
  // )
  const promises = filenames.map(filenames => 
    exerciseUtils
    .promisifiedReadFile(filenames)
    .then(stanza => exerciseUtils.blue(stanza))
    .catch(err => exerciseUtils.magenta(new Error(err)))  
  )

  Promise.all(promises)
  .finally(() => console.log("done"))
}

// EJERCICIO EXTRA
function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
    return new Promise (function(resolve, reject){
      fs.writeFile(filename, (error, str) => {
        if(error) return reject(error)
        else resolve(str)
      })
    })
  }
}
