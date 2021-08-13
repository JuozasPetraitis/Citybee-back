import mongoose from "mongoose";

const carSchema = mongoose.Schema(
  {
    model_id: {
      type: mongoose.ObjectId,
      required: true,
    },
    plates: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { collection: "Vehicles" }
);

export const Car = mongoose.model("Car", carSchema);
