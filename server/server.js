import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';

//create express app and http server
const app = express();
const server = http.createServer(app);

//middlewares
app.use(express.json({limit: "4mb"}))
app.use(cors());

app.use("/api/status", (req,res) => res.send("Server is live..."));
