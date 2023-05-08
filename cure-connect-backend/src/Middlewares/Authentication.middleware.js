const jwt = require('jsonwebtoken');

// chck if the token is valid and present, if the token is valid only then authorize the user to perform operations
const Auth_User = (req,res,next) => {
    const token=req.headers.authorization
    if(token){
        try {
            const decoded=jwt.verify(token.split(" ")[1],"masai")
        if(decoded){
            req.body.authorID=decoded.authorID
            next()
        }else{
            res.send({"msg":"please login ist"})
        }
        } catch (error) {
            res.status(400).send({"msg":error.message})
        }
        
    }else{
        res.send({"msg":"please login ist"})
    }

};

module.exports = {Auth_User}; 


