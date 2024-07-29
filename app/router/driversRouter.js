import { Router } from "express";
import { getAllDrivers, createdDriverRequest,getDriver } from "../controllers/driversController.js";

const driversRoutes = Router()

//obtner todos los drives

driversRoutes.get('/', getAllDrivers)
driversRoutes.get('/:id', getDriver)
driversRoutes.post('/', createdDriverRequest)



export default driversRoutes;