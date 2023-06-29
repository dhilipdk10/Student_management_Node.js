const {Sequelize} = require('Sequelize')

const sequelize = new Sequelize('test', 'admin', 'Mysql-web3',
{
    dialect: 'mysql',
    host: 'test-db.cf7siuqnpusg.us-east-1.rds.amazonaws.com'
});
module.exports = sequelize;