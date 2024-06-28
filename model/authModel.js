const mongoose = require('mongoose');

const userSchema = new mongoose.schema({
    email :{
        type:String,
        required:true,
    unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","other"]
    },
    profilePicture:{
        type:string,
        default:"https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    }



},{
    timestamp:true
}

);
module.exports = mongoose.model("user",userSchema);