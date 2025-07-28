import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';                //

dotenv.config();

import addRoutes from './routes/route.js';
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',    //NEW CORS LINE
    methods: ['GET', 'POST']
}));

app.use("/api", addRoutes);


app.listen(3000, () => {
    connectDB();
    console.log('connected to db. http://localhost:3000');
});

