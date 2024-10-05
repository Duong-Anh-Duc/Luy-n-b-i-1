const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports.register = async (req, res) => {
    const {username, email, password} = req.body
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            username, email, password : hashedPassword
        })
        res.status(201).json(user)
    }catch(error){
        res.status(400).json({message : error.message})
    }
}
module.exports.login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : '1h'})
        res.json({token})
    }
    else{
        res.status(401).json({message: "Invalid email or password"})
    }
}