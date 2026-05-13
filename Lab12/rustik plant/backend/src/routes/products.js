import express from "express";
import slugify from "slugify";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { collection, category, q } = req.query;
  const filter = {};
  if (collection) filter.collection = collection;
  if (category) filter.category = category;
  if (q) filter.name = { $regex: q, $options: "i" };
  const products = await Product.find(filter).populate("category").sort({ createdAt: -1 });
  res.json(products);
});

router.get("/hero", async (_req, res) => {
  const product = await Product.findOne({ isHero: true }).populate("category");
  res.json(product);
});

router.get("/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate("category");
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

router.post("/", async (req, res) => {
  const payload = {
    ...req.body,
    slug: req.body.slug || slugify(req.body.name, { lower: true, strict: true })
  };
  const product = await Product.create(payload);
  res.status(201).json(product);
});

router.put("/:id", async (req, res) => {
  const payload = { ...req.body };
  if (payload.name && !payload.slug) payload.slug = slugify(payload.name, { lower: true, strict: true });
  const product = await Product.findByIdAndUpdate(req.params.id, payload, { new: true, runValidators: true });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product deleted" });
});

export default router;
