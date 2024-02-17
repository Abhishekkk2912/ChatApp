import jwt from "jsonwebtoken";

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    });

    res.cookie("jwt",token,{  //by this we will be getting a cookie in response also...which has our token...
        maxAge:15*24*60*60*1000,  //this is in millisecond
        httpOnly:true,  //prevent XSS attacks(cross site scripting attacks)
        sameSite:"strict",  //prevent CSRF(cross site request forgery attacks)
        secure: process.env.NODE_ENV !== "development",  //when in developement it is false but when in production it is true...
    })
};


export default generateTokenAndSetCookie;