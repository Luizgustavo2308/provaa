"use strict";
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Produtos extends Model { }

    Produtos.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
    },
        {
            sequelize,
            modelName: "produtos",
          
        });

    return Produtos;
}