import dotenv from "dotenv";
dotenv.config();
import { Application } from "./core/Application";

const server: Application = Application.getInstance();
server.register();
server.bootstrap();
