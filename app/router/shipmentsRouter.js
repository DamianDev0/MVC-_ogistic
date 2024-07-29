import { Router } from "express";
import { getAllShipments,createdShipmentRequest,getShipmentByIdRequest} from "../controllers/shipmentsController.js";

const shipmentsRouter = Router()
 
// Ruta para obtener todos los shipments

shipmentsRouter.get('/', getAllShipments)
shipmentsRouter.get('/:id', getShipmentByIdRequest)

shipmentsRouter.post('/',createdShipmentRequest )


export default shipmentsRouter;