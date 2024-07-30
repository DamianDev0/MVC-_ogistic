import {
  getShipments,
  createdshipment,
  getShipmentsByid,
  deleteShipment
} from "../models/shipmentsModel.js";

export const getAllShipments = async (_, res) => {
  try {
    const shipments = await getShipments();
    res.status(200).json({
      message: "Shipments fetched successfully",
      data: shipments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getShipmentByIdRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const [shipment] = await getShipmentsByid(id);
    
    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found" });
    }
    res.status(200).json({
      message: "Shipment fetched successfully",
      data: shipment,
    });
  } catch (error) {}
};

export const createdShipmentRequest = async (req, res) => {
  const { item, quantity, warehouse_id, vehicle_id, driver_id } = req.body;
  try {
    const newShipment = await createdshipment({
      item,
      quantity,
      warehouse_id,
      vehicle_id,
      driver_id,
    });
    res.status(201).json({
      message: "Shipment created successfully",
      data: newShipment,
    });
  } catch (error) {}
};

export const deleteShipmentRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteShipment(id);
    
    if (!deleted) {
      return res.status(404).json({ message: "Shipment not found" });
    }
    res.status(200).json({ message: "Shipment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}