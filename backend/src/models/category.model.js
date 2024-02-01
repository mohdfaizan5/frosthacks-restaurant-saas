import { Schema, model } from "mongoose";

const categorySchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  items:{
    type: Schema.Types.ObjectId,
    ref: Item
  }
},{
  timestamps: true
})


export default Category = model("Category", categorySchema)