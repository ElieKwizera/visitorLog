import express from 'express'
import dotenv from 'dotenv'
import visitors from "./routes/visitors.js";
import connectDB from "./config/db.js"
import morgan from "morgan"

dotenv.config();
await  connectDB();

const app  = express();

app.use(express.urlencoded({ extended: false }))
app.use(morgan("common"));
app.use(express.json());

app.use("/api/visitors", visitors);

const port  = process.env.PORT;

app.listen(port ,  () => {
    console.log(`Server running on port ${port}`);
});