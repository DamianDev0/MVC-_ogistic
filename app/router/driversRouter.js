import { Router } from "express";
import { getAllDrivers, createdDriverRequest,getDriverRequest } from "../controllers/driversController.js";

const driversRoutes = Router()

//obtner todos los drives

driversRoutes.get('/', getAllDrivers)
driversRoutes.get('/:id', getDriverRequest)
driversRoutes.post('/', createdDriverRequest)



export default driversRoutes;