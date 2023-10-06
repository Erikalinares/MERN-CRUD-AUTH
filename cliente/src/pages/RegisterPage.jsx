import {useForm} from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


function RegisterPage() {
    const { 
        register,
        handleSubmit, 
        formState: { errors},
    }  = useForm ();
    const { signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()  

    useEffect(() => {
     if(isAuthenticated) navigate('/tasks'); 
    },[isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    const onChange = () => {
        console.log("Captcha value:", value);
    }

  return (
    <div className='h-[calc(100vh-100px)] flex items-center justify-center'>
    <div className='bg-zinc-400 max-w-md p-10 rounded-md'>
        {
            registerErrors.map((error,i) => (
                <div className='bg-red-500 p2 text-white' key= {i}>
                    {error}
                </div>
            ))
        }

        <form onSubmit={onSubmit}>
            <h1 className='text-2xl font-bold'>Registro de usuario</h1>
            <input type="text" {...register ('username', {required: true})}
                className='w-full bg-zinc-300 text-white px 4 py-2 rounded-md my-2'
                placeholder='Username'/>
            {
                errors.username && (
                    <p className='text-red-500'>Username is required</p>
                )
            }
            <input type="email" {...register ('email', {required: true})}
                className='w-full bg-zinc-300 text-white px 4 py-2 rounded-md my-2'
                placeholder='Email'/>
            {
                errors.email && (
                    <p className='text-red-500'> Email is required</p>
                )
            }
            <input type="password" {...register ('password', {required: true})}
                className='w-full bg-zinc-300 text-white px 4 py-2 rounded-md my-2'
                placeholder='password'/>
            {
                errors.password && (
                    <p className='text-red-500'>Password is required</p>
                )
            }
                <ReCAPTCHA
                    sitekey="6Lc2PH4oAAAAAIAykqGpN7hJ_0LkyKf1AIbQm-HX"
                    onChange={onChange}
                />

            <button type='submit'>
                Register
            </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Already have an account?{''} <Link to="/login" className="text-sky-900">Login</Link>
        </p>
    </div>
    </div>
  )
};

export default RegisterPage