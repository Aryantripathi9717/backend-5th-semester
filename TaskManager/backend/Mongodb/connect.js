import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Mongodb Connected");
        
    } catch (error) {
        console.log("Mongodb connection error",error);
    }
}
export default connectDB;