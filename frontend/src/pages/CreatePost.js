import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSnackbar } from 'notistack'
import api from '../asset/react_API'
import axios from 'axios'


const CreatePost = () => {
  const [title,setTitle] = useState('')
  const [post,setPost] =useState('')
  const data={
    title,
    post
  }
  const {enqueueSnackbar}= useSnackbar()
  const navigate= useNavigate()
  const handleCreatePost= async()=>{
    try {
         await axios.post(`${api}/users/post`,data).then(res=>{
          if(res.data.message ==='Post submitted successfully!'){
               enqueueSnackbar(`${res.data.message}`,{variant: 'success'})
               navigate('/show')
          }
         })
      
    } catch (error) {
      enqueueSnackbar('Something went wrong!',{variant:'error'})
    }
  }

  return (
    <section className='bg-slate-50 mx-auto py-20 w-full'>
  <div className='flex flex-col items-center gap-8 w-full'>
    <h1 className='text-gray-800 font-semibold text-2xl'>Create Post</h1>
    <form className='flex flex-col gap-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/3' action={handleCreatePost}>
      <input
        className='rounded-lg py-3 px-2'
        type='text'
        placeholder='Post title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className='rounded-lg py-3 px-2'
        placeholder='Post message'
        value={post}
        onChange={(e) => setPost(e.target.value)}
        rows='6'
      ></textarea>
      <button type='submit' className='bg-gray-800 text-white rounded-lg py-3 px-2'>
        Add Post
      </button>
    </form>
  </div>
</section>
  )
}

export default CreatePost