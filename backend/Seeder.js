// seeder.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import Product from "./models/productModel.js";


dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    console.log("🌱 Seeding data...");
    console.log("Products to import:", JSON.stringify(products).slice(0, 200)); // Debug log
    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);
    console.log(`✅ Data Imported: ${createdProducts.length} products`);
    process.exit();
  } catch (error) {
    console.error(`❌ Error importing data: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    console.log("🗑️  Data destroyed successfully!");
    process.exit();
  } catch (error) {
    console.error(`❌ Error destroying data: ${error.message}`);
    process.exit(1);
  }
};

// Run command logic
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
