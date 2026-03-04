import mongoose from "mongoose";

const connectDB = async ()=>{

    try {

        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb connected successfully...`);
        
    } catch (error) {

        console.log('something error',error);
        
    }
    
}

export default connectDB