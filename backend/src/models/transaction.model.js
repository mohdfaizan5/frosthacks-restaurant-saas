import { model, Schema } from "mongoose";
const transactionSchema = Schema(
  {
    amount: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    contactType: {
      type: String,
      required: true
    },
    orderStatus: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default Transaction = model("Transaction", transactionSchema);
