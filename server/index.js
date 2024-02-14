import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/Auth.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5001;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected!"))
  .catch((err) => console.log("mongodb not responding..."));
app.get("/test", (req, res) => {
  res.status(200);
  res.send("Server Working Fine!");
});
app.use("/api/auth", authRouter);
app.listen(port, () => {
  console.log(`server started at PORT ${port}`);
});
