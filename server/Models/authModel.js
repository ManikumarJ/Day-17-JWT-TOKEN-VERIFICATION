import mongoose  from "mongoose";

const authSchema = new  mongoose.Schema(
    {
        name : {type: String, require},
        email : {type: String, require},
        password : {type: String, require}
    },
    {timestamps:true}
)

const authModel = mongoose.model("authData", authSchema )

export default authModel
