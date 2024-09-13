// rfce
import React from 'react'

function Login() {
  return (
    <>
    <div className='h-[220px] bg-[#04a784] '>
      <div className='flex ml-[200px] pt-[40px] items-center gap-4'>
        <img src="https://whatsapp-clone-826a9.web.app/whatsapp.svg" alt="" className='h-8' />
        <div className='text-white uppercase font-medium'>Whatsapp</div>
      </div>
    </div>
    <div className='bg-[#eff2f5] h-[calc(100vh-220px)] flex justify-center items-center relative'>
      <div className='h-[80%] w-[50%] bg-white shadow-2xl flex flex-col gap-4 justify-center items-center absolute -top-[93px]'>
        <div>Sign In</div>
        <div>Sign in with your google account to get started</div>
        <button>Sign in with Google</button>
      </div>
    </div>
    </>
  )
}

export default Login