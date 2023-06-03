const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_database', 'postgres', '12345', {
    host: 'localhost',
    dialect:'postgres'
  });
  module.exports=sequelize;