import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("email is",email)
    console.log("password is",password)

    setEmail("")
    setPassword("")

  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-blue-600 p-20'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                required
                 className=' outline-none bg-transparent border-2 border-blue-500 text-xl py-3 mt-10 px-6 rounded-full placeholder:text-gray-300' type="email" placeholder='Enter your Email' />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}  
                required 
                className=' outline-none bg-transparent border-2 border-blue-500 text-xl py-3 mt-5 px-6 rounded-full placeholder:text-gray-300' type="password" placeholder='Enter your Password' />
                <button className=' outline-none border-2 bg-blue-600 text-xl py-3 mt-5  mb-10 px-6 rounded-full placeholder:text-gray-300'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login