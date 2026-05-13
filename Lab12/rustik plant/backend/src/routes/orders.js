import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const orders = await Order.find().populate("items.product").sort({ createdAt: -1 });
  res.json(orders);
});

router.post("/", async (req, res) => {
  const total = req.body.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = await Order.create({ ...req.body, total });
  res.status(201).json(order);
});

router.put("/:id", async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
});

router.delete("/:id", async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json({ message: "Order deleted" });
});

export default router;
