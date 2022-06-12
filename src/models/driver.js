import { Sequelize } from 'sequelize';
import databaseInstance from '/config/database.js';

export default databaseInstance.define("driver", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  companyId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
  },
  city: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  avatarUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false,
  },
}, { tableName: 'driver' });
