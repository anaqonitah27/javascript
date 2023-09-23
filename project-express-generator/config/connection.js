const Sequelize = require('sequelize');
const config = require('./config.json');

const db = (database) => {
    const server = {
        database: config[database].database,
        username: config[username].username,
        password: config[password].password,
        config: config[database]
    };
    return new Sequelize(server.database, server.username, server.password, server.config);
}

exports.connectUtilityKjyn = db('utilitykjyn')