import { getVehicles, createdVehicle,deleteVehicle} from "../models/vehiclesModel.js";

export const getAllVehicles = async (_, res) => {
  const vehicles = await getVehicles();

  res.status(200).json({
    message: "All vehicles fetched successfully",
    data: vehicles,
  });
};

export const createdVehicleRequest = async (req, res) => {
  const { model, year, driver_id } = req.body;

  try {
    const newVehicle = await createdVehicle({ model, year, driver_id});
    
    if (!newVehicle) {
      return res.status(400).json({ message: "Invalid vehicle data" });
    }

    res.status(201).json({
      message: "Vehicle created successfully",
      data: newVehicle,
    });

    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};


export const deleteVehicleRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedVehicle = await deleteVehicle(id);
    
    if (!deletedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json({
      message: "Vehicle deleted successfully",
    });
    
  } catch (error) {
    console.error('error',error)
  }
}