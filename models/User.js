import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    token: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("User", userSchema);

export default User;