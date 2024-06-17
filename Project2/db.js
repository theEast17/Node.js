import mongoose from "mongoose";

const mongoUrl='mongodb://localhost:27017/myhotel'

const connectDb = async () => {
  try {
    const conn=await mongoose.connect(mongoUrl);
    console.log(`MongoDb Connected`)
  } catch (err) {
    console.log("failed to connect");
    process.exit(1);
  }
};

export default connectDb;
