const asyncMySQL = require("./connection");
const data = require("../rickandmorty.json");

console.log(data);

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
//   asyncMySQL(`INSERT INTO characters (char_name, species,gender)
//   VALUES ("${data[i].name}", "${data[i].species}", "${data[i].gender}");`);
// }

// for (let i = 0; i < data.length; i++) {
//   asyncMySQL(`INSERT INTO status (status)
//     VALUES ("${data[i].status}");`);
// }

// for (let i = 0; i < data.length; i++) {
//   asyncMySQL(`INSERT INTO location (origin)
//       VALUES ("${data[i].origin.name}");`);
// }
