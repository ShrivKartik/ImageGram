// import { DB_URL } from "./serverConfig.js";
import mongoose from 'mongoose';

const DB_URL = "mongodb+srv://shrivastavkartikey:JHbAEz4bCSaQaEMg@cluster0.a59sh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL);
        console.log("Connected to mongoDB");
    }

    catch(error){
        console.log("Some error occured...");
    }
}