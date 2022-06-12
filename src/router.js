import { Router } from 'express';

import CompanyController from './controllers/company.js';
import DriverController from './controllers/driver.js';
import VehicleController from './controllers/vehicle.js';

const router = Router();

router.get('/', function(request, response){
  response.json({ message: "API index route"})
})

router.get('/api/company', CompanyController.index);

router.get('/api/driver', DriverController.index);

router.get('/api/vehicle', VehicleController.index);
router.post('/api/vehicle', VehicleController.create);

export default router;
