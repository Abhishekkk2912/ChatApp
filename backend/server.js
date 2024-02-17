import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./database/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   //home/root route http://localhost:5000/
//   res.send("hello world");
// });
app.use(express.json());

//middleware for routes
app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on ${PORT}`);
});
