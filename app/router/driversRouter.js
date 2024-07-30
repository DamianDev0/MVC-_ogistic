import { Router } from "express";
import { getAllDrivers, createdDriverRequest,getDriverRequest, deleteDriverRequest} from "../controllers/driversController.js";

const driversRoutes = Router()

//obtner todos los drives

driversRoutes.get('/', getAllDrivers)
driversRoutes.get('/:id', getDriverRequest)
driversRoutes.post('/', createdDriverRequest)
driversRoutes.delete('/:id', deleteDriverRequest)



export default driversRoutes;