import {useForm} from 'react-hook-form';
import { useAuth } from '../context/authContext.jsx'
import { Link } from 'react-router-dom' 


export function LoginPage() {

const {
        register, 
        handleSubmit, 
        formState: { errors },
       } = useForm();

      const {signin, errors: signinErrors }= useAuth();
      const onSubmit = handleSubmit ((data) => {
        console.log(data);
      signin(data);
});

  return (
    <div className='h-[calc(100vh-100px)] flex items-center justify-center'>
      <div className='bg-zinc-400 max-w-md w-full p-10 rounded-md'>
        {signinErrors.map((error,i) => (
          <div className='bg-red-500 p2 text-white text-center my-2' key= {i}>
            {error}
          </div>
          ))}

        <h1 className='text-2xl font-bold'>LOGIN</h1>

      <form onSubmit={onSubmit}>
              <input type="email" {...register ('email', {required: true})}
                className='w-full bg-zinc-300 text-white px-4 py-2 rounded-md my-2'
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

            <button type='onSubmit'>
                Login
            </button>

        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have an account? 
          <Link to="/register" className="text-sky-900">Sign up</Link>
        </p>
          
      </div>
    </div>
  )
};

export default LoginPage

