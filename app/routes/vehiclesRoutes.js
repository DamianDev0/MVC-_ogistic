import { Router } from "express";
import { pool } from "../../config/db.js";

export const routerVehicles = Router();

//obtener todos lo vehiculos

const getVehiclesRequest = async (_, res) => {
 
};

//obtener un vehiculo por id

const getVehiclesById = async (req, res) => {
  const id = req.params.id;

  try {
    const vehicle = await pool.query("SELECT * FROM vehicles WHERE id = ?", [
      id,
    ]);

    res.status(200).json({
      message: "Vehicle fetched successfully",
      data: vehicle[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

//crear un nuevo vehiculo

const createdVehicleRequest = async (req, res) => {
  const { model, year } = req.body;

  
};

//actualizar un vehiculo

const updatedVehicleRequest = async (req, res) => {
  const { id } = req.params;
  const { model, year } = req.body;

  try {
    const vehicle = await pool.query(
      "UPDATE vehicles SET model =?, year =? WHERE id =?",
      [model, year, id]
    );

    res.status(200).json({
      message: "Vehicle updated successfully",
      data: vehicle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

//eliminar un vehiculo

const deletedVehicleRequest = async (req, res) => {
  const id = req.params.id;

  try {
    const vehicle = await pool.query("DELETE FROM vehicles WHERE id =?", [id]);

    res.status(200).json({
      message: "Vehicle deleted successfully",
      data: vehicle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.sqlMessage,
      errno: error.errno,
    });
  }
};

routerVehicles.get("/", getVehiclesRequest);
routerVehicles.get("/:id", getVehiclesById);
routerVehicles.post("/", createdVehicleRequest);
routerVehicles.put("/:id", updatedVehicleRequest);
routerVehicles.delete("/:id", deletedVehicleRequest);
