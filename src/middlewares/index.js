import express from "express";
import cors from "cors";

// app.use(productsRoutes);

export const expressJSON = express.json();
export const httpForm = express.urlencoded({ extended: false });
export const corsOptions = cors();  