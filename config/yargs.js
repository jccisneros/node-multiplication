const options = {
  numBase: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

module.exports.argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", options)
  .command("crear", "Genera un archivo con la tabla de multiplicar", options)
  .argv;
