import express from "express";

import joinRoutes from "./routes/joinRoutes";

const app = express();

app.use(express.json());
app.use("/joins", joinRoutes);

export default app;