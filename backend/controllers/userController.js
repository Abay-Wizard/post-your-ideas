import bcrypt from 'bcrypt'
import User from '../models/userModel.js'

const signUpUser= async(req,res)=>{
    const {name,email,password}= req.body;
    try {
        const hashedPassword= await bcrypt.hash(password,10)
        const newUser= await new User({name,email, password:hashedPassword});
        await newUser.save()
        res.json({
            message:"User registerd succesfully!",
            data:newUser
        })

    } catch (error) {
        res.json({
            message:"something went wrong!"
        })
    }
}

// login endpoint
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json({
                    message: 'User logged in successfully!',
                    data: {
                        name: user.name,
                        email: user.email,
                    }
                });
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
};

export {loginUser,signUpUser}