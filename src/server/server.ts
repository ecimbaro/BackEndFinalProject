import express, { Request, Response } from "express";
import router from '../routes/routes';
import routeError from '../routes/routeError';
const server = express();
import('../config/db')

server.use(express.json());

server.get("/", (_req:Request, res:Response) => {
  res.send("Welcome to my first server");
});

server.use('/', router)
server.use(routeError)


export default server;
