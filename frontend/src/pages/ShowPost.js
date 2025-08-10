import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import api from '../asset/react_API';


const ShowPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${api}/users/post`);
        setPosts(res.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className='bg-slate-50 w-full mx-auto py-20'>
  <div className='px-6 flex flex-col items-center'>
    <div className='absolute top-26 left-5'><BackButton/></div>
    <Link className='mb-6' to='/create'>
      <button className='rounded-lg py-2 px-4 bg-red-600 text-white'>Add New Post</button>
    </Link>
    <div className='flex flex-col items-center gap-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2'>
      {posts.map((post, index) => (
        <div key={index} className='w-full flex flex-col gap-2'>
          <h1 className='text-3xl font-semibold text-gray-800 border-2 rounded-lg border-purple-200 p-4'>
            {post.title}
          </h1>
          <p className='text-gray-800 border-2 rounded-lg border-green-200 whitespace-pre-wrap p-4'>
            {post.post}
          </p>
          <div className='flex gap-2'>
            <Link to={`/update/${post._id}`}><FiEdit/></Link>
            <Link to={`/delete/${post._id}`}><FiTrash2/></Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default ShowPost;