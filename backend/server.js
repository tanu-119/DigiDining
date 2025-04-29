require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middlewares
app.use(cors({
  origin: 'https://digidining-frontend.onrender.com',
  methods: ['GET', 'POST', 'OPTIONS'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Handle preflight requests (CORS)
app.options("*", cors());

// Routes
app.use("/orders", orderRoutes);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
