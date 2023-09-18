import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: "string",
        require: true,
        trim: true,
    },
    email: {
        type: "string",
        require: true,
        trim: true,
        unique: true,
    },
    password: {
        type: "string",
        require: true,
    }
}, {
    timestamps: true
})

export default mongoose.model ('User', userSchema)
