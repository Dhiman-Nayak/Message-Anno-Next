import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode : string,
    
):Promise<ApiResponse> {

    try {

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to:email,
            subject: 'Verification Code',
            react: VerificationEmail({ username: username,otp:verifyCode})
        })
        return {success : true,message:"sending verification email successfully"}
        
    } catch (error) {
        console.error("error sending verification email",error);
        return {success : false,message:"Failed sending verification email"}
    }
}
