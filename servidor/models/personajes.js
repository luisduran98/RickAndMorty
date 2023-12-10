const { DataTypes } = require("sequelize");

module.exports = (dbRickAndMorty) => {
    dbRickAndMorty.define("personajes", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        estado: {
            type: DataTypes.ENUM("Alive", "Dead", "unknown"),
            allowNull: false,
        },
        especie: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        genero: {
            type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
            allowNull: false,
        },
        origen: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
    }, { "timestamps": false });
};