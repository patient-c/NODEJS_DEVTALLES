// const { buildMakePerson } = require("./js-foundation/05-factory");
// const {getAge,getUUID} = require('./plugins')

// const getPokemonById = require("./js-foundation/06-promises");

const {buildLogger} = require("./plugins")

// getPokemonById(1)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log(err))
  // .finally(() => console.log("Finalmente"));

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Esto es algo malo')

//! Referencia a la funcion factory y uso
// const makePerson = buildMakePerson({getUUID,getAge})

// const obj = { name: "John", birthdate: "1998-10-31" };

// const johnDoe =  makePerson(obj)

// console.log(johnDoe);
