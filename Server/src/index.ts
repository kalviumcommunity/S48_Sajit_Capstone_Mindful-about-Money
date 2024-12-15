import express, { Express } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // No need to cast here
app.use(cors()); // No need to cast here

const mongoURI: string = process.env.MONGO_URI || "";
if (!mongoURI) {
  console.error(
    "Error: MongoDB URI is missing. Please check your environment variables.",
  );
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB 📦");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port} 🚀`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/financial-records", financialRecordRouter);
