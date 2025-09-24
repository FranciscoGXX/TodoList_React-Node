

// const express = require("express");
import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import { connection } from "./Db/DB-connection.js";


dotenv.config(); //Para leer las varibles de entorno

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.get("/api/health",async (req,res)=>{
  try {
    const {rows}= await connection.query("SELECT NOW()");
    res.json({Date: rows[0]})
  } catch (error) {
    res.status(400).json({message: error})
  }
})

app.get("/api/users", async(req,res)=>{
  res.send("Lista Usuarios")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
