import express from "express";
import datacontactroutes from "./routes/Datacontact.Routes.js";
import contactoroutes from "./routes/Contacto.Routes.js";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(datacontactroutes);
app.use(contactoroutes)

export default app;

