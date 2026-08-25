const fs = require("fs");

const content = fs.readFileSync("README.md", "utf-8");

const words = content.split(' ');

const ReactWordCount = content.match(/react/gi ?? []).length

console.log(`Cuantas palabras: ${words.length}`);
console.log(`Cantidad de palabras: ${ReactWordCount}`);