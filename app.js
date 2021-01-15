const { argv } = require("./config/yarg");
const colors = require("colors");
const { crearArchivo, listarArchivo } = require("./operaciones/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarArchivo(argv.b, argv.l)
      .then((tabla) => {
        console.log("===================================".green.bold);
        console.log(`Tabla de multiplicar del número ${argv.b}`.green.bold);
        console.log("===================================".green.bold);
        console.log(tabla);
      })
      .catch((error) => console.error(error.red));
    break;

  case "crear":
    crearArchivo(argv.b, argv.l)
      .then((archivo) =>
        console.log(`Archivo creado: ${archivo.green}`.bold)
      )
      .catch((error) => console.error(error.red));
    break;

  default:
    console.log("Comando no reconocido".red);
    break;
}
