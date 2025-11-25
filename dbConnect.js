const mongoose=require("mongoose")


//  by promise  / schema method

mongoose.connect("mongodb://127.0.0.1:27017/wd2pmJuneCrud")
.then(()=>{
    console.log("Database is Successfully connected");
})
.catch((error)=>{
    console.log(error);
})

// by function method or async method

// async function getConnect(){
//     try{
//         mongoose.connect("mongodb://127.0.0.1:27017/wd2pmJuneCurd")
//         console.log("DataBase is Connected!!!");
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getConnect()