import mongoose from "mongoose";
const User=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    bloodtype:{type:String,required:true},
    organ:{type:String,required:true},
    tissuesize:{type:String,required:true},
    urgency:{type:String,required:true}

});
export default mongoose.model('Users',User)