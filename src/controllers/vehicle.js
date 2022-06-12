import VehicleService from '../services/vehicleService.js';

import { isInteger, isAllFieldsStrings } from '../utils/validator.js';

export default {
  async index(_req, res) {
    try {
      const vehicles = await VehicleService.fetchAll();
      res.json(vehicles)
    } catch (error) {
      console.error('Could not fetch from database', error);

      res.status(500).json({
        message: 'Could not fetch all vehicles',
      });
    }
  },

  async create(req, res) {
    const { driverId, plate, model, type, capacity } = req.body;
    const hasAnyEmptyParam = !driverId || !plate || !model || !type || !capacity;

    if (hasAnyEmptyParam) {
      res.status(400).json({
        message: 'There are params missing for vehicle creation',
      });
    }

    const hasAnyInvalidParam =
      !isInteger(driverId) || !isAllFieldsStrings([plate, model, type, capacity]);

    if (hasAnyInvalidParam) {
      res.status(400).json({
        message: 'There are params with type invalid for vehicle creation',
      });
    }

    try {
      await VehicleService.create({ driverId, plate, model, type, capacity });
    } catch (error) {
      console.error('An error ocurred on Vehicles Creation', error);

      res.status(500).json({
        message: 'Could not create current vehicle',
      });
    }
  }
}
