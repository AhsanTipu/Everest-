const express=require('express')
const app=express();
const port=process.env.PORT || 3000;
const path=require('path')
const addDetail=require('./src/db/Details')

app.use(express.json())
app.use(express.urlencoded({extended:false}));
const a=path.join(__dirname,"./public");
const path_view= path.join(__dirname,"./templates/views")
app.use(express.static(a))
app.set("view engine","hbs");``
app.set("views",path_view)

app.get("/", (req,res)=>{
   res.render("index")
})

app.post("/", async (req,res)=>{
    try{

    const newDetail=new addDetail({
        Email:req.body.Email,
        Query:req.body.Query

    })
    const data=await newDetail.save()
    res.status(201).render("index")
}catch(e){
    res.status(400).send(e)
}

})
app.listen(port,()=>{
console.log("CHALRA HAI")
})