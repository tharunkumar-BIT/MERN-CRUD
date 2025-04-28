import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => console.log(err));

app.use("/api", route)