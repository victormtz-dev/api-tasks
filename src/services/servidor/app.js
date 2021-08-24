import express from "express";
import config from "../../config/config";
import IndexRoutes from "../../routes/index.routes"
import {expressJSON, httpForm, corsOptions} from "../../middlewares/index"

const app = express();

//settings
app.set("port", config.port);

//middlewares
app.use(expressJSON);
app.use(httpForm);
app.use(corsOptions);

//Routes
app.use("/api", IndexRoutes);

export default app;