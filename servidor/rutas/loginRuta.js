const {Router} = require("express");
const loginRuta = Router();
const postRegister = require("../controladores/postRegister");
const postLogin = require("../controladores/postLogin");

loginRuta.post("/", postLogin);

loginRuta.post("/register",postRegister);

module.exports = loginRuta;