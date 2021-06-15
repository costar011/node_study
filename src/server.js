import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => console.log("✅ Server Start"));
