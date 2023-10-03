import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-zinc-400 my-0 flex justify-between py-5 px-10 '>
        <h1 className='text-2xl font-bold '>Tasks Manager</h1>
        <ul className='flex gap-x-2'>
            <li>
               <Link to='/login'>Login</Link>
            </li>
            <li>
               <Link to='/register'>Register</Link>
            </li>
        </ul>
    </nav>
    
  )
}

export default Navbar