import mongoose from "mongoose";

const storageSchema = new mongoose.Schema({
  storage: { type: String, required: true }, 
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true, unique: true },
});

const variantSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  color: { type: String },
  image: { type: String, required: true },
  imageGallery: [{ type: String }],
  storageOptions: [storageSchema],
});

const emiPlanSchema = new mongoose.Schema({
  id: { type: String, required: true },
  tenureMonths: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  cashback: { type: Number, default: 0 },
  fund: { type: String },
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    imageGallery: [{ type: String }],
    color: { type: String },
    RAM: [{ type: String }],
    OperatingSystem: { type: String },
    category: { type: String },
    description: { type: String },
    variants: [variantSchema],
    emiPlans: [emiPlanSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
