import mongoose from "mongoose";

//this connect function is needed in api calls
export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        connection.on('error', (err)=>{
            console.log('MongoDB connection error, please make sure it is running!' + err);
            process.exit(1);
        })
    } catch(error) {
        console.log(error);
    }
}