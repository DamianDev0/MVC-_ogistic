import { getWarehouses, createWarehouse} from "../models/warehouseModel.js";

export const getAllWarehouses = async (_, res) => {
  const warehouses = await getWarehouses();
  res.status(200).json({
    message: "All warehouses fetched successfully",
    data: warehouses,
  });
};

export const createdWarehouseRequest = async (req, res) => {
  try {
    const { name, location,vehicle_id } = req.body;
    console.log(name, location);

    const newWarehouse = await createWarehouse({ name, location,vehicle_id });
    res.status(201).json({
      message: "Warehouse created successfully",
      data: newWarehouse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });

  }
};
