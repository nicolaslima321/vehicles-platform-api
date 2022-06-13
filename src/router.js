import { Router } from 'express';

import CompanyController from './controllers/company.js';
import DriverController from './controllers/driver.js';
import VehicleController from './controllers/vehicle.js';

const router = Router();

router.get('/', function(request, response){
  response.json({ message: "API index route"})
})

router.get('/api/driver', DriverController.index);

router.get('/api/vehicle', VehicleController.index);
router.get('/api/vehicle/:id', VehicleController.show);
router.post('/api/vehicle', VehicleController.create);
router.patch('/api/vehicle/:id', VehicleController.update);
router.delete('/api/vehicle/:id', VehicleController.delete);

router.get('/api/company', CompanyController.index);


export default router;
