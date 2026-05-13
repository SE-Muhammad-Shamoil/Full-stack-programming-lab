import "dotenv/config";
import mongoose from "mongoose";
import slugify from "slugify";
import { connectDb } from "./db.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";

const asset = (name) => `/assets/${name}.jpg`;

const categoryData = [
  { name: "Chairs", image: asset("collection-chairs"), description: "Curved, relaxed seating in natural wood finishes." },
  { name: "Beds", image: asset("collection-beds"), description: "Handmade bed frames and storage beds." },
  { name: "Tables", image: asset("collection-tables"), description: "Coffee, dining, and display tables." },
  { name: "Cabinets", image: asset("product-bookcase"), description: "Tall storage pieces and bookcases." }
];

const products = [
  ["Ribbed Chaise Lounge", "featured", "Chairs", 129.99, undefined, asset("hero-chaise"), true],
  ["Round Ribbed Table", "featured", "Tables", 134.99, undefined, asset("product-bowl")],
  ["Low Square Coffee Table", "featured", "Tables", 134.99, undefined, asset("product-coffee-square")],
  ["Trestle Dining Table", "featured", "Tables", 134.99, undefined, asset("product-dining")],
  ["Garden Bowl Planter", "featured", "Tables", 134.99, undefined, asset("product-planter")],
  ["Classic Dining Chair", "special", "Chairs", 134.99, 234.99, asset("product-chair")],
  ["Outdoor Lounge Chair", "special", "Chairs", 134.99, 254.99, asset("product-lounge")],
  ["Round Accent Chairs", "special", "Chairs", 134.99, 264.99, asset("product-round-chairs")],
  ["Rustik Storage Chest", "special", "Cabinets", 134.99, 244.99, asset("product-chest")],
  ["Tall Open Bookcase", "popular", "Cabinets", 134.99, undefined, asset("product-bookcase")],
  ["Storage Timber Bed", "popular", "Beds", 134.99, undefined, asset("product-storage-bed")],
  ["Carved Heritage Bed", "popular", "Beds", 134.99, undefined, asset("product-carved-bed")],
  ["Classic Cream Bed", "popular", "Beds", 134.99, undefined, asset("product-classic-bed")]
];

await connectDb();
await Category.deleteMany({});
await Product.deleteMany({});

const createdCategories = await Category.insertMany(
  categoryData.map((item) => ({ ...item, slug: slugify(item.name, { lower: true, strict: true }) }))
);
const byName = Object.fromEntries(createdCategories.map((category) => [category.name, category._id]));

await Product.insertMany(
  products.map(([name, collection, categoryName, price, oldPrice, image, isHero = false]) => ({
    name,
    slug: slugify(name, { lower: true, strict: true }),
    collection,
    category: byName[categoryName],
    price,
    oldPrice,
    image,
    isHero,
    stock: 12,
    description: "This is Photoshop's version of Lorem Ipsum. Rich timber texture, curved forms, and a warm handcrafted finish."
  }))
);

console.log("Seeded Rustik Plank categories and products.");
await mongoose.disconnect();
