import mongoose from "mongoose"
import { config } from "dotenv"
import { ENV } from "./env";


export const dbconnect = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URL);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database", error);
        process.exit(1);
    }
}