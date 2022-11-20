import React from 'react'
import { Button } from 'antd';
import loginBackground from '../images/loginBackground.jpg'

export const Login = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img className='absolute w-max h-full object-cover mix-blend-overlay' src={loginBackground} alt="/" />

      <div className='flex justify-end items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>Login as an User</h2>
          <div className='flex justify-between py-8'>
            {/* <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p> */}
            {/* <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p> */}
          </div>
          <div className='flex flex-col mb-4'>
            <label>Username </label>
            <input className='border relative bg-gray-100 p-2' type="text" />
          </div>
          <div className='flex flex-col '>
            <label className='text-black'>Password </label>
            <input className='border relative bg-gray-100 p-2' type="password" />
          </div>
          <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
          <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
          <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
        <div className = 'grid mr-60 justify-center'>
          <div className='py-10'>
            <Button type="primary">User Login</Button>
          </div>
          <div>
            <Button type="primary">Doctor Login</Button>
          </div>
        </div>
      </div>

    </div>)
}




















