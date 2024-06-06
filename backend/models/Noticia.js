const Sequelize = require('sequelize');
const db = require("../config/database");
module.exports = function(sequelize, DataTypes) {
    return db.define('Noticia', {
        IdNoticia: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Titulo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        UrlImagen: {
            type: DataTypes.STRING(127)
        },
        Enlace: {
            type: DataTypes.STRING(127)
        }
    }, {
        sequelize,
        tableName: 'NOTICIA',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "IdNoticia" },
                ]
            },
        ]
    });
}