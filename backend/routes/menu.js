const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Get all menu items (optionally filter by category)
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const menuItems = await MenuItem.find(query);
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get single menu item
router.get("/:id", async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) return res.status(404).json({ message: "Item not found" });
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
