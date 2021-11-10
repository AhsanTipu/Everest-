require("../db/conn")
const mongo=require('mongoose')

const DetailScheme=mongo.Schema({
    Email:{
        type:String,
        required:true,
        unique:true,

    },
    Query:{
        type:String,
        required:true,
    }
})

const addDetail=new mongo.model("addDetail",DetailScheme)

module.exports=addDetail;