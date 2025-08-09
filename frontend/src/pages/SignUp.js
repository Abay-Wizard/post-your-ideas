import React, {useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import { useSnackbar} from 'notistack'
import BackButton from '../components/BackButton'
import api from '../asset/react_API'


const SignUp = () => {
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const data= {
        name,
        email,
        password
    }
    const navigate= useNavigate()
    const {enqueueSnackbar} =useSnackbar()
    const handleRegister= async()=>{
      try {
        await axios.post(`${api}/users/register`,data).then(res =>{
            console.log(res.data.data.name)
            console.log(res.data.data.email)
            navigate('/login')
            enqueueSnackbar(`${res.data.message}`, {variant:'success'})
        })

      } catch (error) {
        console.log(error)
      }
    }
    
  return (
    <section className='mx-auto py-20 px-8 bg-slate-50 w-full'>
      <div className='relative'>
        <div className='absolute left-10 top-10'><BackButton/></div>
        <div className='flex flex-col items-center gap-8'>
          <h1 className='text-2xl font-semibold text-purple-700'>Sign Up</h1>
          <form className='w-1/2 lg:w-1/3 bg-slate-100 flex flex-col gap-6' action={handleRegister}>
              <input className='py-3 px-2 rounded-lg' type='text'  placeholder='username' value={name} onChange={(e)=> setName(e.target.value)}/>
              <input className='py-3 px-2 rounded-lg' type='email' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input className='py-3 px-2 rounded-lg' type='password' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
              <button className='w-full bg-red-600 text-white rounded-lg py-2' type='submit'>Create Account</button>
          </form>
          <button className='bg-gray-800 text-white rounded-lg w-1/2 lg:w-1/3 py-2'><Link to='/login'>Already have an account? Login here →</Link></button>
        </div>
      </div>
    </section>
  )
}

export default SignUp