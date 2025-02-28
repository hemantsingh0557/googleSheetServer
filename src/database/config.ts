import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", true);

  const uri = process.env.MONGO_URI as string; 

  try {
    let res = await mongoose.connect(uri);
    console.log("🚀 ~ MongoDB connected to:", res.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit the process on failure
  }
};

export default connect;
