import mongoose from "mongoose";

const MONGO_URL = `mongodb+srv://sumit1711kd:zmWVRlp1Mnq2dT63@cluster0.pdklgpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connection = async()=>{
    try{
        console.log(MONGO_URL)
        await mongoose.connect(MONGO_URL);
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error in connecting to database");
        console.log()
    }
}

export default connection;

