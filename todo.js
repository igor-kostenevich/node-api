import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  date: {type: Number, required: true},
  title: {type: String, required: true},
  done: {type: Boolean, required: true},
})

export default mongoose.model('Todo', Todo)