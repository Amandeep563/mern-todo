dotenv.config();
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
import todoRouter from "./router/todo.router.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/api", todoRouter);
app.get("/", (req, res) => {
  res.send("Let's see i createed a file ");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running in port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection failed:`, err);
  });

export default app;
