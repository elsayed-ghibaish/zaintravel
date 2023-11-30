import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI || "default_connection_string";
    if (!mongodbUri) {
      throw new Error("MongoDB URI is not defined");
    }

    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
