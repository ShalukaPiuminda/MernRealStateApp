import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-5'>
        <input type='text' placeholder='username' id='' className='border p-3 rounded-lg ' />
        <input type='email' placeholder='Email' id='' className='border p-3 rounded-lg' s />
        <input type='password' placeholder='Password' id='' className='border p-3 rounded-lg'/>
        <button  className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign up</button>
      </form>
        <div className='flex gap-2 mt-5 justify-center text-base'>
          <p className=''> Have an Account ?</p>
          <Link to={'/signin'}>
          <span className='text-green-600 underline'>Sign in</span>
          </Link>
        </div>
    </div>
  )
}
