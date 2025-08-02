import mongoose, { mongo } from "mongoose";


const url = `mongodb+srv://irshadahmad:irshadahmad@irshadcluster.w5dqwxs.mongodb.net/?retryWrites=true&w=majority&appName=IrshadCluster`;

mongoose.connect(url);

export default mongoose;