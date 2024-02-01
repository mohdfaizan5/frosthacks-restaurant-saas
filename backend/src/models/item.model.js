import { Schema, model } from "mongoose";

const itemSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  price: {
    type: String,
    required: true,
  },
  tax: {
    type: String
  },
  packingCharges: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  foodType: {
    type: String,
    enum: ["veg", "nonveg"]
  },
  string: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: Category
  },

}, {timestamps: true})

export default Item = model("Item", itemSchema)