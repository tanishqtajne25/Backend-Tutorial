import express from "express";

const app = express(); // create an express app

app.use(express.json()); // middleware to parse JSON request bodies

// routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRoutes);

// example route: http://localhost:8000/api/v1/users/register

export default app;