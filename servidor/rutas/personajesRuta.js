const {Router} = require("express");
const personajesRuta = Router();
const postPersonajes = require("../controladores/postPersonajes");
const deletePersonaje = require("../controladores/deletePersonaje");

personajesRuta.post("/", postPersonajes);
personajesRuta.delete("/",deletePersonaje)

module.exports = personajesRuta;