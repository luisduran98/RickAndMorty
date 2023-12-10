const {Router} = require("express");
const rutas = Router();
const loginRuta = require("./loginRuta");
const favoriteRuta = require("./favoriteRuta");
const personajesRuta = require("./personajesRuta");

rutas.use("/login", loginRuta);
rutas.use("/favorite", favoriteRuta);
rutas.use("/personajes", personajesRuta);

module.exports = rutas;