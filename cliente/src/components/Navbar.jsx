import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext';

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    


  return (
    <nav className='bg-zinc-400 my-0 flex justify-between py-5 px-10 '>
        <Link to='/'>
            <h1 className='text-2xl font-bold '>Tasks Manager</h1>
        </Link>
        <ul className='flex gap-x-2'>
            { isAuthenticated ? (
              <>
                <li className='text-5xl font-bold '>
                    Welcome {user.username}
                </li>
                <li>
                    <Link to='/add-task' className='bg-indigo-500 px-5 py-2 rounded-sm'>Add Tasks</Link>
                </li>

                <li>
                    <Link to='/' onClick={() => logout()} className='bg-indigo-500 px-5 py-2 rounded-sm'>Logout </Link>
                </li>

              </>

            ) : (
            <>
                <li>
                    <Link to='/login' className='bg-indigo-500 px-5 py-2 rounded-sm'>
                      Login</Link>
                </li>
                 <li>
                    <Link to='/register'  className='bg-indigo-500 px-5 py-2 rounded-sm'>
                      Register</Link>
                </li>

            </>
            )}
        </ul>
    </nav>
    
  )
}

export default Navbar