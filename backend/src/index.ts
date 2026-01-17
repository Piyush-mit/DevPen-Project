import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import { dbconnect } from "./lib/dbConnect";
import { userRouter } from "./routes/userRouter";
import { compilerRouter } from "./routes/compilerRouter";
import { ENV } from "./lib/env";
import path from "path";

const app = express();

const currDirectory = path.resolve();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: [ENV.CLIENT_URL]
}))

app.use("/compiler", compilerRouter);
app.use("/user", userRouter);

if (ENV.NODE_ENV == "production") {
    app.use(express.static(path.join(currDirectory, '../frontend/dist')));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(currDirectory, "../frontend", "dist", "index.html"));
    })
}


const startServer = async () => {
    try {
        await dbconnect();
        app.listen(ENV.PORT, () => console.log("Server active on port", ENV.PORT))
    } catch (error) {
        console.error("Error starting the server", error);
    }
}

startServer();