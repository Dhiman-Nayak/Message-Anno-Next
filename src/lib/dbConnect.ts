import mongoose, { mongo } from "mongoose";

type connectionObject = {
    isConnected?: number
}

const connection: connectionObject = {

}

const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("already connected");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || "", {})
        connection.isConnected = db.connections[0].readyState;
        console.log("DB connected");
        
    } catch (error) {
        console.log("DB failed",error);
        
        process.exit(1)
    }
}
export default dbConnect;