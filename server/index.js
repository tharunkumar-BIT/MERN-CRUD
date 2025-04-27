import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
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
