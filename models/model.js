import mongoose from "mongoose";

const carModelSchema = mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { collection: "Models" }
);

export const CarModel = mongoose.model("CarModel", carModelSchema);
