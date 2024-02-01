import { Schema, model } from "mongoose";

const orderSchema = Schema(
  {
    deliveryAddress: {
      type: String,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "completed", "cancled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default Order = model("Order", orderSchema);
