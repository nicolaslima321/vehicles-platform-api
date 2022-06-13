import { Sequelize } from 'sequelize';
import databaseInstance from '../../config/database.js';

const vehicleModel = databaseInstance.define("vehicle", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  driverId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'driver',
      key: 'id'
    },
    field: 'driver_id',
  },
  plate: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  capacity: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false,
  },
}, { tableName: 'vehicle' });


vehicleModel.associate = function(driverModel) {
  vehicleModel.hasMany(driverModel, { as: 'driver', foreignKey: 'id', sourceKey: 'driverId' });
}

// vehicleModel.hasMany(DriverModel);

export default vehicleModel;