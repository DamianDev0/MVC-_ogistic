import {
  getWarehouses,
  createWarehouse,
  getWarehouseById,
  deleteWarehouse
} from "../models/warehouseModel.js";

export const getAllWarehouses = async (_, res) => {
  const warehouses = await getWarehouses();
  res.status(200).json({
    message: "All warehouses fetched successfully",
    data: warehouses,
  });
};

export const getWarehouseByIdRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const warehouseFound = await getWarehouseById(id);
    if (!warehouseFound) {
      return res.status(404).json({ message: "Warehouse not found" });
    }
    res.status(200).json({
      message: "Warehouse fetched successfully",
      data: warehouseFound,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

export const createdWarehouseRequest = async (req, res) => {
  try {
    const { name, location, vehicle_id } = req.body;

    const newWarehouse = await createWarehouse({ name, location, vehicle_id });

    if (!newWarehouse) {
      return res.status(400).json({ message: "Failed to create warehouse" });
    }

    res.status(201).json({
      message: "Warehouse created successfully",
      data: newWarehouse
    });
  } catch (error) {
    console.error('Error in createdWarehouseRequest:', error);
    res.status(500).json({
      error: error.message,
    });
  }
};


export const deleteWarehouseRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const warehouseDelete = await deleteWarehouse(id);

    if (warehouseDelete.affectedRows === 0) {
      return res.status(404).json({ message: "Warehouse not found" });
    }

    res.status(200).json({
      message: "Warehouse deleted successfully",
      data: { id } 
    });
  } catch (error) {
    console.error('Error deleting warehouse:', error);
    res.status(500).json({
      error: error.sqlMessage ,
      errno: error.errno 
    });
  }
};
