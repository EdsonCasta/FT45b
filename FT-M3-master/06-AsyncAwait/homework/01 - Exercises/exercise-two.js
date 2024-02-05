"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
  problemCx: problemC,
  problemDx: problemD,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

async function problemA() {
  // callback version
  exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });
  exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza) {
    exerciseUtils.blue(stanza);
  });

  // async await version
  // Tu código acá:
  try {

    console.log("-- A. Async/Await version --")

    const [stanza, stanza1] = await Promise.all([
      exerciseUtils.promisifiedReadFile("poem-one/stanza-01.txt"),
      exerciseUtils.promisifiedReadFile("poem-one/stanza-02.txt")
    ])

    exerciseUtils.blue(stanza)
    exerciseUtils.blue(stanza1)

    console.log("-- A. Async/Await version done --");
  } catch (err) {
    exerciseUtils.magenta(err)
  }
}


async function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
    });
  });

  // async await version
  // Tu código acá:
  try {
    const promises = filenames.map(async (filenames) => {
      const stanza = await exerciseUtils.promisifiedReadFile(filenames)
      exerciseUtils.blue(stanza)
    })
    await Promise.all(promises)

  } catch (err) {

  }
}

async function problemC() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
    });
  });

  // async await version
  // Tu código acá:
  try {
    for (const filename of filenames) {
      const stanza = await exerciseUtils.promisifiedReadFile(filename)
      exerciseUtils.blue(stanza)
    }
  } catch (err) {

  }
}

async function problemD() {
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

  // async await version
  // Tu código acá:
  for (const filename of filenames) {
      try {
      const stanza = await exerciseUtils.promisifiedReadFile(filename)
      exerciseUtils.blue(stanza)
    } catch (err) {
     exerciseUtils.magenta(err) 
    }
  }
}
