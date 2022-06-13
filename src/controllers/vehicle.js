import VehicleService from '../services/vehicleService.js';

import { isInteger, isAllFieldsStrings } from '../utils/validator.js';

export default {
  async index(req, res) {
    try {
      const { ...filterOptions } = req.query;
      const vehicles = await VehicleService.fetchAll(filterOptions);
      return res.json(vehicles)
    } catch (error) {
      console.error('[VehicleController] Could not fetch vehicles from database', error);

      return res.status(500).json({
        message: 'Could not fetch all vehicles',
      });
    }
  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const currentVehicle = await VehicleService.find(id);

      if (!currentVehicle) {
        console.error('[VehicleController] No vehicle found for given ID');

        return res.status(404).json({
          message: 'The requested vehicle does not exists',
        });
      }

      return res.status(200).json(currentVehicle);
    } catch (error) {
      console.error('[VehicleController] An error ocurred to find vehicle', error);

      return res.status(500).json({
        message: 'Could not find vehicle',
      });
    }
  },

  async create(req, res) {
    const { driverId, plate, model, type, capacity } = req.body;
    const hasAnyEmptyParam = !driverId || !plate || !model || !type || !capacity;

    if (hasAnyEmptyParam) {
      console.error('[VehicleController] Params are missing');

      return res.status(400).json({
        message: 'There are params missing for vehicle creation',
      });
    }

    const hasAnyInvalidParam =
      !isInteger(driverId) || !isAllFieldsStrings([plate, model, type, capacity]);

    if (hasAnyInvalidParam) {
      console.error('[VehicleController] Params are invalid');

      return res.status(400).json({
        message: 'There are params with type invalid for vehicle creation',
      });
    }

    try {
      const creationDate = Date.now();
      await VehicleService.create({ driverId, plate, model, type, capacity, creationDate });

      return res.status(200).json({
        message: 'Vehicle successfully created!',
      });
    } catch (error) {
      console.error('[VehicleController] An error ocurred on Vehicles Creation', error);

      return res.status(500).json({
        message: 'Could not create the current vehicle',
      });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { driverId, plate, model, type, capacity } = req.body;
    const hasAnyEmptyParam = !driverId || !plate || !model || !type || !capacity;

    if (hasAnyEmptyParam) {
      console.error('[VehicleController] Params are missing');

      return res.status(400).json({
        message: 'There are params missing for vehicle creation',
      });
    }

    const hasAnyInvalidParam =
      !isInteger(driverId) || !isAllFieldsStrings([plate, model, type, capacity]);

    if (hasAnyInvalidParam) {
      console.error('[VehicleController] Params are invalid');

      return res.status(400).json({
        message: 'There are params with type invalid for vehicle creation',
      });
    }

    try {
      const currentVehicleExists = await VehicleService.find(id);

      if (!currentVehicleExists) {
        console.error('[VehicleController] No vehicle found for update');

        return res.status(404).json({
          message: 'The requested vehicle does not exists',
        });
      }

      await VehicleService.update(id, { driverId, plate, model, type, capacity });

      return res.status(200).json({
        message: 'Vehicle successfully updated!',
      });
    } catch (error) {
      console.error('[VehicleController] An error ocurred on Vehicle update', error);

      return res.status(500).json({
        message: 'Could not update the current vehicle',
      });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const currentVehicleExists = await VehicleService.find(id);

      if (!currentVehicleExists) {
        console.error('[VehicleController] No vehicle found for deletion');

        return res.status(404).json({
          message: 'The requested vehicle does not exists',
        });
      }

      await VehicleService.delete(id);

      return res.status(200).json({
        message: 'Vehicle successfully deleted!',
      });
    } catch (error) {
      console.error('[VehicleController] An error ocurred on Vehicle delete', error);

      return res.status(500).json({
        message: 'Could not delete the current vehicle',
      });
    }
  }
}
