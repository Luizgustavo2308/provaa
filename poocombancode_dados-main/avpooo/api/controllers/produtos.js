const Produtos = require('../models/produtos');
const { Sequelize } = require('sequelize');

module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize("root", "12345", {

            host: "localhost",
            dialect: "mysql"

        });

        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll();
      
        res.status(200).send(produtos);
    },

    async create(req, res) {

        const sequelize = new Sequelize("root", "12345", {

            host: "localhost",
            dialect: "mysql"

        });

        await Produtos(sequelize, Sequelize.DataTypes).create({
            produtos: req.body.produtos,
        })

        res.status(200).send({ mensagem: "product added" });



    },
    async update(req, res) {

        const sequelize = new Sequelize("root", "12345", {

            host: "localhost",
            dialect: "mysql"

        });

        await Produtos(sequelize, Sequelize.DataTypes).update({
            produtos: req.body.produtos,
        }, { where: { id: req.params.id } }
        );

        res.status(200).send({ mensagem: "edited sucess" });



    },
    async delete(req, res) {

        const sequelize = new Sequelize("root", "12345", {

            host: "localhost",
            dialect: "mysql"

        });

        await Produtos(sequelize, Sequelize.DataTypes).destroy(
            { where: { id: req.params.id } }
        );

        res.status(200).send({ mensagem: "deleted" });



    },



};
