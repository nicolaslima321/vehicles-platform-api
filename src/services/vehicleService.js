import VehicleRepository from '../models/vehicle.js';
import DriverRepository from '../models/driver.js';
import { Op } from 'sequelize';

export default {
  fetchAll(filterOptions) {
    let queryProps = {
      include: [{
        model: DriverRepository,
        as: 'driver',
      }],
    }

    if (filterOptions.hasOwnProperty('vehicleId')) {
      Object.assign(queryProps, { where: {
        id: filterOptions.vehicleId,
      }});
    }

    if (filterOptions.hasOwnProperty('driverName')) {
      Object.assign(queryProps, { include: [{
        model: DriverRepository,
        as: 'driver',
        where: {
          [Op.or]: [{
            firstName: {
              [Op.like]: `%${filterOptions.driverName}%`,
            },
            lastName: {
              [Op.like]: `%${filterOptions.driverName}%`,
            },
          }],
        }
      }]});
    }

    if (filterOptions.hasOwnProperty('model')) {
      Object.assign(queryProps, { where: {
        model: {
          [Op.like]: `%${filterOptions.model}%`,
        },
      }});
    }

    if (filterOptions.hasOwnProperty('creationDate')) {
      Object.assign(queryProps, { where: {
        creationDate: new Date(filterOptions.creationDate),
      }});
    }

    if (filterOptions.hasOwnProperty('plate')) {
      Object.assign(queryProps, { where: {
        plate: {
          [Op.like]: `%${filterOptions.plate}%`,
        },
      }});
    }

    if (filterOptions.hasOwnProperty('capacity')) {
      Object.assign(queryProps, { where: {
        capacity: {
          [Op.like]: `%${filterOptions.capacity}%`,
        },
      }});
    }

    if (filterOptions.hasOwnProperty('type')) {
      Object.assign(queryProps, { where: {
        type: {
          [Op.like]: `%${filterOptions.type}%`,
        },
      }});
    }

    return VehicleRepository.findAll(queryProps);
  },

  find(id) {
    return VehicleRepository.findOne({
      where: { id },
      include: [{ model: DriverRepository }],
    });
  },

  delete(id) {
    return VehicleRepository.destroy({ where: { id }});
  },

  update(id, params) {
    return VehicleRepository.update(params, { where: { id }});
  },

  create(vehicleParams) {
    return VehicleRepository.create(vehicleParams);
  }
}
