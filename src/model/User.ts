import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: String,
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    userName: String,
    email: String,
    password: String,
    verifyCode: String,
    VerifyExpiryCode: Date,
    message: Message[],
    isVerified: Boolean,
    isMessageAccepting: Boolean
}

const UserSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, "Please add a valid one"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verifyCode: {
        type: String,
        required: true
    },
    VerifyExpiryCode: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isMessageAccepting: {
        type: Boolean,
        default: false
    },
    message:[MessageSchema],
    
})

const UserModel = (mongoose.models.UserSchema as mongoose.Model<User>) ||(mongoose.model<User>("User",UserSchema))

export default UserModel