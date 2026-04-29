const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();


app.set("view-engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res) => {
  res.render("index.ejs");
}
)
app.get("/NEP-2020",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/pdf/PM Shri Schools Scheme Data.pdf"))
})
app.listen(process.env.PORT|| 3000,()=>{
 console.log("http://localhost:" + process.env.PORT)
})