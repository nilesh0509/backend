const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path")

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const sliderRoutes = require("./routes/sliderRoutes");
app.use("/api/sliders", sliderRoutes);

const favoriteRoutes = require("./routes/favoriteRoutes");
app.use("/api/favorites", favoriteRoutes);


const categoryRoutes = require("./routes/categoryRoutes");
const petRoutes = require("./routes/petRoutes");

app.use("/api/categories", categoryRoutes);
app.use("/api/pets", petRoutes);




// Serve uploaded images as static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", require("./routes/userRoutes"));
// app.use("/api/pets", require("./routes/petRoutes"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`PawPal Backend Server Running ${PORT}`.bgMagenta.white));
