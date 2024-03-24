//creating express server

const express =require("express");
const app=express()        // iss function mw wo sara functionalaties add ho jayega jo express provide karega

//importing ejs
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');

//importing path module
const path=require('path');


const PORT=process.env.PORT || 3300

//Asset
app.use(express.static('public'));

//create routing
app.get('/',(req,res)=>{
    res.render("home");
})

//set template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`Server is listining on ${PORT}`);
})