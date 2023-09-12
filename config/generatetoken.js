const jwt =require ('jsonwebtoken');
console.log("hello checking!!", process.env.REACT_APP_JWT_SECRET);
const generateToken = (id) => {
    return jwt.sign({id}, process.env.REACT_APP_JWT_SECRET,{
        expiresIn:"60d"
        
    })
}

module.exports = generateToken;