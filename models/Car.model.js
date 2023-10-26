import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    producer: { type: String },
    createdAt: { type: Date, default: new Date() }
}, {
    versionKey: false
})

const Car = mongoose.model("car", CarSchema);
export default Car;