import { Router } from "express";
import { getAllWarehouses, createdWarehouseRequest, getWarehouseByIdRequest, deleteWarehouseRequest} from "../controllers/warehouseController.js";

const warehouseRouter = Router()

// endpoints
warehouseRouter.get('/', getAllWarehouses)
warehouseRouter.get('/:id', getWarehouseByIdRequest)
warehouseRouter.post('/', createdWarehouseRequest)
warehouseRouter.delete('/:id', deleteWarehouseRequest)




export default warehouseRouter;