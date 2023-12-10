const {DataTypes} = require("sequelize");

module.exports = (dbRickAndMorty)=>{

    dbRickAndMorty.define("usuarios",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },{"timestamps": false })
}