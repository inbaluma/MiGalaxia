let DataTypes = require("sequelize").DataTypes;
let _Noticia = require("./Noticia");
let _Seccion = require("./Seccion");

function initModels(sequelize) {
    let Noticia = _Noticia(sequelize, DataTypes);
    let Seccion = _Seccion(sequelize, DataTypes);

    return {
        Noticia,
        Seccion
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;