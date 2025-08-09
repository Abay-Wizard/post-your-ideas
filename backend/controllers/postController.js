import Post from '../models/postModel.js'

const createPost= async(req,res)=>{
    const post= req.body
    try {
        const newPost= await Post(post)
        await newPost.save()
        res.json({
            message:"Post submitted successfully!",
            data:newPost
        })
    } catch (error) {
       res.json({
        message:'Something went wrong!'
       }) 
    }

}

const getAllPosts= async(req,res)=>{
    try {
        const posts= await Post.find({})
        res.json({
           message:"Posts fetched succesfully!",
           data:posts
        })
    } catch (error) {
       res.json({
        message:"error in finding posts!"
       }) 
    }
}

const getSinglePost= async(req,res)=>{
    const {id}= req.params
    try {
        const post= await Post.findById(id)
        res.json({
            message:'Post fetched successfully!',
            data:post
        })
    } catch (error) {
        
    }
}

const updatePost= async(req,res)=>{
    const {id}=req.params
    const post=req.body
    try {
        const updatedPost= await Post.findByIdAndUpdate(id,post,{new:true})
        res.json({
            message:'Post updated successfully!',
            data:updatedPost
        })
    } catch (error) {
       res.json({
        message:'Something went wrong!'
       }) 
    }
}

const deletePost= async(req,res)=>{
    const {id}= req.params
    try {
       await Post.findByIdAndDelete(id)
       res.json({
        message:'Post deleted succesfully!'
       })
    } catch (error) {
        res.json({
            message:'something went wrong!'
        })
    }
}

export {createPost,getAllPosts,getSinglePost,updatePost,deletePost}