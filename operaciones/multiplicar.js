const fs = require("fs");

let data = "";

const validation = (numBase, reject) => {
  if (!Number(numBase)) {
    reject(`El valor ingresado ${numBase} no es un número`);
    return;
  }
};

const iteration = (numBase, limite) => {
  for (let i = 1; i <= limite; i++) {
    resultado = numBase * i;
    data += `${numBase} * ${i} = ${resultado} \n`;
    return data;
  }
};

module.exports.listarArchivo = (numBase, limite = 10) => {
  return new Promise((resolve, reject) => {
    validation(numBase, reject);

    iteration(numBase, limite);

    resolve(data);
  });
};

module.exports.crearArchivo = (numBase, limite = 10) => {
  return new Promise((resolve, reject) => {
    validation(numBase, reject);

    for (let i = 1; i <= limite; i++) {
      resultado = numBase * i;
      data += `${numBase} * ${i} = ${resultado} \n`;
    }

    fs.writeFile(`./tablas-multiplicar/tabla-${numBase}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${numBase}.txt`);
    });
  });
};
