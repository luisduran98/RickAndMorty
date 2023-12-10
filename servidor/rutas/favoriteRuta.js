const {Router} = require("express");
const favoriteRuta = Router();
const postFav = require("../controladores/postFav");
const deleteFav = require("../controladores/deleteFav");

favoriteRuta.post("/", postFav);
favoriteRuta.delete("/",deleteFav);

module.exports = favoriteRuta;