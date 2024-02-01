import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await connect(process.env.MONGOURI);
    console.log(
      `\t✅ MongoDb Connection successfully and host is ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("\t❌ MongoDb error", error);
    process.exit(1);
  }
};

export default connectDB