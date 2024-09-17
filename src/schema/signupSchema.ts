import {z} from "zod"

export const usernameValidation = z
    .string()
    .min(2,"Username must be 2 char")
    .max(2,"Username less than 20 char");

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message:"invalid email"}),
    password:z.string().min(6,{message:"atleast 6 char"})

})