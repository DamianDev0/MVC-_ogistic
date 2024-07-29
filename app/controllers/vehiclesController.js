import { getVehicles, createdVehicle } from "../models/vehiclesModel.js";

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
