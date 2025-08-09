import express from 'express'
import { createPost,getAllPosts,getSinglePost,deletePost,updatePost } from "../../controllers/postController.js";

const router= express.Router()

router.get('/',getAllPosts)
router.get('/:id',getSinglePost)
router.post('/',createPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)

export default router;