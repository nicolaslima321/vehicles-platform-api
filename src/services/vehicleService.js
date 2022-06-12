import VehicleRepository from '../models/vehicle.js';
import DriverRepository from '../models/driver.js';

export default {
  fetchAll() {
    return VehicleRepository.findAll({
      include: [{ model: DriverRepository }],
    });
  },

  create(vehicleParams) {
    VehicleRepository.create(vehicleParams);
  }
}
