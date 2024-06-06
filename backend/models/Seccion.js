const Sequelize = require('sequelize');
const db = require("../config/database");
module.exports = function(sequelize, DataTypes) {
    return db.define('Seccion', {
        IdSeccion: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        IdNoticia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Posicion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Titulo: {
            type: DataTypes.STRING(255),
        },
        Contenido: {
            type: DataTypes.STRING(2048),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'SECCION',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "IdSeccion" },
                ]
            },
        ]
    });
}