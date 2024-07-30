import { Router } from "express";
import { getAllShipments,createdShipmentRequest,getShipmentByIdRequest,deleteShipmentRequest} from "../controllers/shipmentsController.js";

const shipmentsRouter = Router()
 
// Ruta para obtener todos los shipments

shipmentsRouter.get('/', getAllShipments)
shipmentsRouter.get('/:id', getShipmentByIdRequest)
shipmentsRouter.post('/',createdShipmentRequest )
shipmentsRouter.delete('/:id', deleteShipmentRequest)


export default shipmentsRouter;