import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    collection: { type: String, enum: ["featured", "special", "popular"], default: "featured" },
    description: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    oldPrice: { type: Number, min: 0 },
    image: { type: String, default: "" },
    stock: { type: Number, default: 10, min: 0 },
    isHero: { type: Boolean, default: false }
  },
  { timestamps: true, suppressReservedKeysWarning: true }
);

export default mongoose.model("Product", productSchema);
