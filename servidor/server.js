const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rutas = require("./rutas/index");

const server = express();
const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

server.use(cors(corsOptions));
server.use(morgan('dev'));
server.use(express.json());
server.use(rutas);

module.exports = {
  server,
  PORT
};
