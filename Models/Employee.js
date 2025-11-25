const mongoose=require("mongoose")
const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be Required"]
    },
    email:{
        type:String,
        required:[true,"Email must be Required"]
    },
    phone:{
        type:String,
        required:[true,"Phone must be Required"]
    },
    dsg:{
        type:String,
        required:[true,"Designation must be Required"]
    },
    salary:{
        type:Number,
        required:[true,"Salary must be Required"]
    },
    city:{
        type:String
    },
    state:{
        type:String
    }
})
const Employee = new mongoose.model("Employee",EmployeeSchema)
module.exports=Employee