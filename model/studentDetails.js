const Sequelize = require('sequelize');
const sequelize = require('../utill/database');
const StudentDetails = sequelize.define('Database04',{
    id :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name :{
        type : Sequelize.STRING,
        allowNull : false
    },
    address: {
        type : Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull:false
    },
    phoneNumber: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    parent: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
module.exports = StudentDetails;