const mongo=require('mongoose')

mongo.connect("mongodb://localhost:27017/Everest",{
    useNewUrlParser:true,

}).then(()=>{
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e)
})