const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
// Create a new order
router.post("/", async (req, res) => {
  try {
    const { name, phone, items } = req.body;
    if (!name || !phone || !items || !Array.isArray(items)) {
      return res.status(400).json({ message: "Invalid request" });
    }

    // Map items to add quantity:1 if not available
    const updatedItems = items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1, // default to 1
    }));

    const total = updatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = new Order({ name, phone, items: updatedItems, total });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get orders by phone number
router.get("/", async (req, res) => {
  try {
    const { phone } = req.query;

    if (!phone) {
      return res.status(400).json({ message: "Phone number required" });
    }

    const orders = await Order.find({ phone }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
