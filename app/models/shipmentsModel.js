import { pool } from "../../config/db.js";

import { findWarehouseById,findVehicleById,findDriverById } from "../utils/functionsQuerys.js";





export async function getShipments() {
  try {
    const [shipment] = await pool.query("SELECT * FROM shipments");
    return shipment;
  } catch (error) {
    console.error(error);
  }
}

export async function getShipmentsByid(shipment){
  try {
    const [shipmentGet] = await pool.query("SELECT * FROM shipments WHERE id =?", [shipment]);
    return shipmentGet

  } catch (error) {
    console.error(error);
    throw new Error("Error while checking shipment existence.");
  }
}

export async function createdshipment(shipment) {
  try {

    const warehouseExists = await findWarehouseById(shipment.warehouse_id)
    const vehicleExists = await findVehicleById(shipment.vehicle_id)
    const driverExists = await findDriverById(shipment.driver_id)

    if (!warehouseExists ||!vehicleExists ||!driverExists) {
      throw new Error("One or more required IDs do not exist in the database.")
    }
    const [result] = await pool.query(
      "INSERT INTO shipments (item,quantity,warehouse_id,vehicle_id,driver_id) VALUES (?, ?, ?, ?,?)",
      [shipment.item, shipment.quantity, shipment.warehouse_id, shipment.vehicle_id, shipment.driver_id]
    );

    const shipmentId = result.insertId

    const [newShipment] = await pool.query("SELECT * FROM shipments WHERE id = ?", [shipmentId]);

    return newShipment[0];

  } catch (error) {
    console.error(error);
    throw new Error("Error while creating shipment.");
  }
}


export async function deleteShipment(id){
  try {
    const [result] = await pool.query("DELETE FROM shipments WHERE id =?", [id]);

    if(!result){
      throw new Error("Shipment not found.");
    }
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error while deleting shipment.");
  }
} 