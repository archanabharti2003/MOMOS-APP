//creating express server

require('dotenv').config()
const express =require("express");
const app=express()        // iss function mw wo sara functionalaties add ho jayega jo express provide karega

//importing ejs
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');

//importing path module
const path=require('path');

// const session=require('express-session')
const flash=require('express-flash');

const session = require('express-session');
const MongoStore = require('connect-mongo');


const mongoose=require('mongoose');

//database connection
const url='mongodb://localhost/momos';

mongoose.connect(url);           //useNewUrlParser:true,useUnifiedTopology:true

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Database connected..");
});

connection.on('error', (error) => {
    console.error('Connection error:', error);
});


//session store
const mongoStore = new MongoStore({
    client: mongoose.connection.getClient(),
    collectionName: 'sessions'
  });


//Session configuration session works as middleware session cookies ke bina kaam nhi karte hai

app.use(session({
    secret:process.env.COOKIES_SECRET,  //ye cookie ko encrypt karne ke liye use hota hai
    resave: false,
    store:mongoStore,
    saveUninitialized:false,
    cookie: {maxAge: 1000*60*60*24}     //Correct this :- in db cookies expiry time is not showing
    //cookie: {maxAge: 1000*15} 
}))


app.use(flash())

const PORT=process.env.PORT || 3300

//Asset
app.use(express.static('public'));


//set template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine', 'ejs');

require('./routes/web')(app) //ye ek function receive karega..


app.listen(PORT,()=>{
    console.log(`Server is listining on ${PORT}`);
})