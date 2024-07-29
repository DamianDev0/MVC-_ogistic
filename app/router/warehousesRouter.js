import { Router } from "express";
import { getAllWarehouses, createdWarehouseRequest} from "../controllers/warehouseController.js";

const warehouseRouter = Router()

// endpoints
warehouseRouter.get('/', getAllWarehouses)
warehouseRouter.post('/', createdWarehouseRequest)






export default warehouseRouter;