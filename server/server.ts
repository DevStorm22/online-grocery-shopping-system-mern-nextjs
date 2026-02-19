import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRoute from "./routes/health.route";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/", healthRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
