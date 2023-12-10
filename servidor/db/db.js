require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB} = process.env;
const usuariosFunction = require("../models/usuarios");
const favoritosFunction = require("../models/favoritos");
const personajesFuntion = require("../models/personajes");

const dbRickAndMorty = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`,
    { logging: false, native: false }
 );

 usuariosFunction(dbRickAndMorty)
 favoritosFunction(dbRickAndMorty)
 personajesFuntion(dbRickAndMorty)

const {usuarios, favoritos, personajes} = dbRickAndMorty.models;

usuarios.belongsToMany(favoritos, { through: 'usuarios_favoritos' });
favoritos.belongsToMany(usuarios, { through: 'usuarios_favoritos' });

usuarios.belongsToMany(personajes, { through: 'usuarios_personajes' });
personajes.belongsToMany(usuarios, { through: 'usuarios_personajes' });

 module.exports = {
    dbRickAndMorty,
    ...dbRickAndMorty.models,
 }