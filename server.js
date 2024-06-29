const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
//const mongoose = require("mongoose");


//! Routes
const authRoutes = require("./routes/authRoutes");
dotenv.config();
const app = express();
//database connection

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", authRoutes);

app.listen(3000, () =>{
    console.log("server is running on port 3000");
});