import { Sequelize } from 'sequelize';
import databaseInstance from '/config/database.js';

import CompanyModel from './company.js';
import VehicleModel from './vehicle.js';

const driverModel = databaseInstance.define("driver", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  companyId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'company',
      key: 'id'
    },
    field: 'company_id',
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

driverModel.associate = function() {
  driverModel.belongsTo(VehicleModel, { foreignKey: 'id' });
  driverModel.hasMany(CompanyModel, { foreignKey: 'id', sourceKey: 'companyId' });

  VehicleModel.associate(driverModel);
  CompanyModel.associate(driverModel);
}

driverModel.associate();

export default driverModel;
