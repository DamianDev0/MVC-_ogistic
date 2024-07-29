import { Router } from "express";
import { pool } from "../../config/db.js";

export const routerShipments = Router();

//funcion para obtener los shipments

const getShipments = async (_, res) => {
 
};

//funcion para obtener un shipment por id

const getShipmentById = async (req, res) => {
  const id = req.params;

  try {
    const [shipment] = await pool.query("SELECT * FROM shipments WHERE id =?", [id,]);

    res.status(200).json({
      message: "Shipment fetched successfully",
      data: shipment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

//funcion para crear un shipment

const createdShipmentRequest = async (req, res) => {
  const { item, quantity } = req.body;

  
};

//funcion para actualizar
const updatedShipmentRequest = async (req,res) => {
    const { id } = req.params
    const { item, quantity } = req.body;

    try {
        const updatedShipment = await pool.query('UPDATE shipments SET item = ? ,quantity = ? WHERE id = ?', [item, quantity, id] )
        
        res.status(200).json({
            message: 'Shipment updated successfully',
            data: updatedShipment,
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error.sqlMessage,
            errno: error.errno,
        });
    }
}


//funcion para eliminar

const deletedShipmentRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedShipment = await pool.query('DELETE FROM shipments WHERE id =?', [id] )
        
        res.status(200).json({
            message: 'Shipment deleted successfully',
            data: deletedShipment,
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error.sqlMessage,
            errno: error.errno,
        });
    }
}



routerShipments.get("/", getShipments);
routerShipments.get("/:id", getShipmentById);
routerShipments.post("/", createdShipmentRequest);
routerShipments.put("/:id", updatedShipmentRequest);
routerShipments.delete("/:id", deletedShipmentRequest);
