const mongoose = require("../db/mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
