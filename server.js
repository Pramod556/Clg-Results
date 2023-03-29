const { json } = require('express');
const express=require('express');
// const result=require('./results')
// const fetch = require('node-fetch');
// const views=require('views');
const app=express();
app.use(express.urlencoded({extended:true}))
app.listen(8080,()=>{
    console.log("listening for requests")
});
app.set('view engine','ejs');
app.get('/',(req,res)=>{
   res.send("hello");
})
app.get('/data',(req,res)=>{
    console.log("reached data")
    res.render('form')
})
app.post('/form',(req,res)=>{
    console.log('path')
    let path=req.body.htnum;
    console.log(path)
    let url;
    url='https://results-restapi.up.railway.app/all-r18/'+path;
    console.log("fetch")
     
     
    fetch(url).then((res=>res.json().then(data=>console.log(Object.keys(data).forEach(ele=>{
console.log(ele)
    }))))

    ) 
    // app.post("/", function(req, res) {
    //     var num1 = Number(req.body.num1);
    //     var num2 = Number(req.body.num2);
          
    //     var result = num1 + num2 ;
          
    //     res.send("Addition - " + result);
    //   });

})
