import jwt from 'jsonwebtoken'
export const verifyUserData = (req,res,next)=>{

   const token = req.headers.authorization

   if(!token){
      return res.status(404).json({msg:"Please Login , using correct email/password"})
   }


try {

   const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
      
   req.jwtuser = decode

   next()

} catch (error) {

  return res.status(404).json({msg:"Not Valid Use Try again"})
   
}



}