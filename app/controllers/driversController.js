import { getDrivers, createDriver,findDriver, deleteDriver } from "../models/driversModel.js";

export const getAllDrivers = async (_, res) => {
  try {
    const drivers = await getDrivers();

    res.status(200).json({
      message: "Drivers fetched successfully",
      data: drivers,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createdDriverRequest = async (req, res) => {
  const { name, warehouse_id} = req.body;
  try {
    const createdDriver = await createDriver({name,warehouse_id});

    res.status(201).json({
      message: "Driver created successfully",
      data: createdDriver,
    });
  } catch (error) {
    console.error(error);
  }
};


export const getDriverRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const [driverFound] = await findDriver(id);

    if (!driverFound) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json({
      message: "Driver fetched successfully",
      data: driverFound,
    });
    
  } catch (error) {
    
  }
}

export const deleteDriverRequest = async (req, res) => {
  const { id} = req.params
  try {
    const deletedDriver = await deleteDriver(id);
    
    if (!deletedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.status(200).json({
      message: "Driver deleted successfully",
    });
    
  } catch (error) {
    
  }
}