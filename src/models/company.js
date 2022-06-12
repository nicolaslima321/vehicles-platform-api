import { Sequelize } from 'sequelize';
import databaseInstance from '/config/database.js';

export default databaseInstance.define("company", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  city: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  planType: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false,
  },
}, { tableName: 'company' });
