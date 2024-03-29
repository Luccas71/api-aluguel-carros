import express from "express";

import { categoriesRouter } from "./routes/categories.routes";
import { specificationRouter } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/specifications", specificationRouter);

app.listen(3333, () => console.log("server is running!"));
