import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"

import { sendVerificationEmail } from "@/helpers/sendVerificationEmails";

async function POST(request: Request) {
    await dbConnect();
    try {
        const {}=await request.json()
    } catch (error) {
        console.error("Error registering user ", error);

        return Response.json({ message: "Error registering user" },{status:500})
    }
}