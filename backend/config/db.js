import mongoose from 'mongoose';

const ConnectDB =async()=>{
   try {
    await mongoose.connect(process.env.mongo_atlas_string).then(()=>{
        console.log('MongoDB connected successfully!')
    })
    
   } catch (error) {
    console.log('error')
   }
}


export default ConnectDB