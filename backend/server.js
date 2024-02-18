import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./database/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   //home/root route http://localhost:5000/
//   res.send("hello world");
// });

//middlewares
app.use(express.json());
app.use(cookieParser());

//middleware for routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on ${PORT}`);
});
