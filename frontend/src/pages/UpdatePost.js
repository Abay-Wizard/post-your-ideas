import {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import api from '../asset/react_API'

const UpdatePost = () => {
  const [title,setTitle]= useState('')
  const [post,setPost] =useState('')
  const navigate =useNavigate()
  const {enqueueSnackbar} = useSnackbar()
  
  const {id} =useParams();
  useEffect(()=>{
   const fetchPost =async()=>{
    const res= await axios.get(`http://localhost:5000/users/post/${id}`)
    setTitle(res.data.data.title)
    setPost(res.data.data.post)
   }
   fetchPost()
  },[id])
const handleEditPost= async()=>{
  const data={
    title,
    post
  }
  try {
    await axios.put(`${api}/users/post/${id}`,data)
    navigate('/show')
    enqueueSnackbar('post updated succesfully!',{variant:'success'})

  } catch (error) {
    enqueueSnackbar('Something went wrong!',{variant:'error'})
  }
}
  return (
    <section className='bg-slate-50 mx-auto py-20 w-full'>
      <div className='flex flex-col items-center gap-8 w-full'>
         <h1 className='text-gray-800 font-semibold text-2xl'> Edit Post</h1>
         <form className='flex flex-col gap-8 w-1/2 lg:w-1/3' action={handleEditPost}>
          <input className='rounded-lg py-3 px-2' type='text' placeholder='Post title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <textarea className='rounded-lg py-3 px-2' type='text' placeholder='Post message' value={post} onChange={(e)=>setPost(e.target.value)} rows='6'></textarea>
          <button type='submit' className='bg-gray-800 text-white rounded-lg py-3 px-2'>Save</button>
         </form>
      </div>
    </section>
  )
}

export default UpdatePost