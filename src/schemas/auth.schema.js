import { z } from 'zod'; // validaciones 

// validar registro 
export const registerSchema = z.object ({
    username: z.string({
        required_error: 'Username is required',
    }),// aqui se puede colocar una cantidad max o min de caracteres
    
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid is not email ',
    }),
   
    password: z.string({
        required_error: 'Password is required',
    }).min (6,{
        message: 'password must be at least 6 characters',
    }),
});

// validar login 
export const loginSchema = z.object ({
    email: z.string ({
        required_error: 'Email is required',
    }).email ({
        message:'Email is not valid',
    }),
    password: z.string ({
        required_error: 'Password is required',
    }).min (6, {
        message:'password must be at least 6 characters',
    }),
});