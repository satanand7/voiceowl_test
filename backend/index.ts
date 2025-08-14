import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import transcriptionRoutes from "./routes/transcriptionRoutes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/", transcriptionRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
