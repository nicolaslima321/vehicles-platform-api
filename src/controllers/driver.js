import DriverRepository from '../models/driver.js';

export default {
  async index(_req, res) {
    try {
      const drivers = await DriverRepository.findAll();
      return res.json(drivers)
    } catch (error) {
      console.error('Could not fetch from database', error);

      return res.json({
        message: 'Could not fetch all drivers',
      }, 500);
    }
  }
}
