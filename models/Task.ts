import { model, models, Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    text: {
      type: String,
      require,
    },
    categoryId: {
      type: String,
      require,
    },
  },
  { timestamps: true, _id: true }
);

const Task = models.Task || model("Task", TaskSchema);
export default Task;
