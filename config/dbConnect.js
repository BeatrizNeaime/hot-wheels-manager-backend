import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_CONNECTION, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default dbConnect;