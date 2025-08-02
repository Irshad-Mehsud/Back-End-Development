import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv/config";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@irshadcluster.w5dqwxs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=IrshadCluster`;

mongoose.connect(url);

export default mongoose;