const mongoose = require("mongoose");

const UsersSchema =  mongoose.Schema(
    {
      
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        Email:{type:String, required:true, unique:true},
        Password:{type:String, required:true},
        address:{type:String},
        phoneNumber:{type:String},

    },
    {VersionKey:false},{timestamps:true},);

    const UsersModel = mongoose.model("users", UsersSchema);
    module.exports = UsersModel;