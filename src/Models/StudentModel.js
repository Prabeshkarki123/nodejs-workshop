const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('@root/sequelize-config');
class Student extends Model {}
Student.init({
    std_id : {
        type: DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
    },
    std_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    std_faculty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    std_address : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Not-Set'
    },
    std_phone:{
        type: DataTypes.BIGINT,
        allowNull:false,
        defaultValue: 'NULL'
    }
  }, {
    sequelize, 
    tableName: 'student_table',
    modelName: 'Student' 
  });
Student.sync({alter: true});
module.exports = Student;