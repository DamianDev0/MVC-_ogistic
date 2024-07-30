import { Router } from "express";

import { getAllVehicles,createdVehicleRequest,deleteVehicleRequest } from "../controllers/vehiclesController.js";

const vehiclesRouter = Router();

vehiclesRouter.get("/", getAllVehicles);
vehiclesRouter.post("/", createdVehicleRequest);
vehiclesRouter.delete("/:id", deleteVehicleRequest);


export default vehiclesRouter;