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


//set template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine', 'ejs');

//create routing for home page
app.get('/',(req,res)=>{
    res.render("home");
})

// create routing for cart page
app.get('/cart', (req, res) => {
    res.render("customers/cart");
});

// create routing for login page
app.get('/login', (req, res) => {
    res.render("auth/login");
});

// create routing for register page
app.get('/register', (req, res) => {
    res.render("auth/register");
});


app.listen(PORT,()=>{
    console.log(`Server is listining on ${PORT}`);
})