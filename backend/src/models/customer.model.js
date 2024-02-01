import { Schema, model } from "mongoose";

const customerSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  contact:{
    type: String,
    required: true,
  },
  totalSpent:{
    type: Number,
    default: 0,
  },
  totalOrders:[{
    type: Schema.Types.ObjectId
  }],
  email: {
    type: String
  }
}, {timestamps: true})

export default Customer = model("Customer", customerSchema)