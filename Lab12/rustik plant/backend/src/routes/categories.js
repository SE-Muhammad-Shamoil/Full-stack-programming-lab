import express from "express";
import slugify from "slugify";
import Category from "../models/Category.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
});

router.post("/", async (req, res) => {
  const category = await Category.create({
    ...req.body,
    slug: req.body.slug || slugify(req.body.name, { lower: true, strict: true })
  });
  res.status(201).json(category);
});

router.put("/:id", async (req, res) => {
  const payload = { ...req.body };
  if (payload.name && !payload.slug) payload.slug = slugify(payload.name, { lower: true, strict: true });
  const category = await Category.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json(category);
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json({ message: "Category deleted" });
});

export default router;
