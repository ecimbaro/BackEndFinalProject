import express from "express";
import router from '../routes/routes';
const server = express();
import ('../config/db')

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to my first server");
});

server.use('/', router)

export default server;
