import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/recipe-book"; // Default local DB URL

  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDB;
