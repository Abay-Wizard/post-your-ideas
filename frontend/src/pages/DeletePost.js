import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import api from '../asset/react_API'

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeletePost =async()=>{
   try {
    await axios.delete(`${api}/users/post/${id}`)
    enqueueSnackbar('post deleted succesfully!',{variant:'success'})
    navigate('/show')
   } catch (error) {
    enqueueSnackbar('something went wrong!',{variant:'error'})
   }
  }
 return (
  <div className='px-4 sm:px-10 py-12 flex flex-col items-center gap-5'>
  <h1 className='text-red-600 text-xl text-center'>Are you sure you want to delete the post?</h1>
  <button 
    onClick={handleDeletePost} 
    className='bg-gray-800 text-white py-2 px-4 sm:px-6 rounded-lg'
  >
    Yes, delete it
  </button>
</div>
 )
};

export default DeletePost;