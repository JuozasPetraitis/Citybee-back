// IMPORTING MODULES (ES6)
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
const app = express();

// MODELS
import { CarModel } from "./models/model.js";
import { Car } from "./models/vehicle.js";

// VARIABLES
const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGO_DB_URI;
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MIDDLEWARES
app.use(cors());
app.use(json());
// Connecting to MongoDB and Starting server
mongoose.connect(MONGO, OPTIONS, () => {
  console.log("Connection to MongoDB was successfull.".bgYellow.black);

  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`.bgWhite.black);
  });
});

// ROUTES
// GET
app.get("/", (request, response) => {
  response.send("Working");
});
app.get("/models", async (request, response) => {
  const data = await CarModel.find({});

  response.json(data);
});

app.get("/modelscount", async (request, response) => {
  const modelData = await CarModel.find({});

  // Car.countDocuments({ model_id: "611561b55e2a1209bca504bd" }, (err, count) => {
  //   console.log("%d", count);
  // });

  let data = [];
  data.push(vehicleData, modelData);
  response.json(data);
});

app.get("/vehicles", async (request, response) => {
  const data = await Car.find({});

  response.json(data);
});

// POST
app.post("/models", async (request, response) => {
  const carObject = new CarModel(request.body);

  await carObject.save();

  const responseToFront = "Model has been added.";

  response.json(responseToFront);
});

app.post("/vehicles", async (request, response) => {
  const carObject = new Car(request.body);
  // console.log(carObject);
  await carObject.save();

  const responseToFront = "Car has been added.";

  response.json(responseToFront);
});
