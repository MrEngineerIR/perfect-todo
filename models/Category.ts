import { model, models, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    label: {
      type: String,
      require,
    },
    BoardId: {
      type: String,
      require,
    },
  },
  { timestamps: true, _id: true }
);

const Category = models.Category || model("Category", CategorySchema);
export default Category;
