import React,{useState} from 'react'
import {useSnackbar} from 'notistack'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton'
import api from '../asset/react_API'

const Login = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const data={
        email,
        password
    }
    const {enqueueSnackbar} =useSnackbar()
    const navigate= useNavigate()
    const handleLogin= async()=>{
        try {
            await axios.post(`${api}/users/login`,data).then(res=>{
                if(res.data.message ==='User logged in successfully!'){
                    localStorage.setItem('userName',res.data.data.name)
                    enqueueSnackbar(`${res.data.message}`,{variant:'success'})
                    navigate('/dashboard')
                } 
            })
        } catch (error) {
          enqueueSnackbar(`Incorrect password or email!`,{variant:'error'})     
        }
    }
  return (
    <section className='bg-red-100 mx-auto py-20 px-6 w-full'>
        <div className='relative'>
            <div className='absolute left-10 top-10'><BackButton/></div>
            <div className='flex flex-col items-center gap-8 px-6'>
                <h1 className='text-2xl text-gray-800 font-semibold mt-5'>Sign In</h1>
                <form action={handleLogin} className='w-1/2 lg:w-1/3 bg-red-50 flex flex-col gap-6'>
                    <input className='py-3 px-2 rounded-lg' type='email' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input className='py-3 px-2 rounded-lg' type='password' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button className='w-full bg-green-800 text-white rounded-lg py-2' type='submit'>Login</button>
                </form>
                <button className='bg-gray-800 text-white rounded-lg py-2 w-1/2 lg:w-1/3'><Link to='/register'>Have no account yet? Create One → </Link></button>
            </div>
        </div>
    </section>
  )
}

export default Login