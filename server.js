//creating express server

require('dotenv').config()
const express =require("express");
const session = require('express-session');
const app=express()        // iss function mw wo sara functionalaties add ho jayega jo express provide karega

//importing ejs
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');

//importing path module
const path=require('path');

// const session=require('express-session')
const flash=require('express-flash');


const MongoDbStore = require('connect-mongo')(session);


const mongoose=require('mongoose');
const { collection } = require('./app/models/menu');

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
let mongoStore = new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions' 
  });


//Session configuration session works as middleware session cookies ke bina kaam nhi karte hai

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
    //cookie: { maxAge: 1000 * 5 } // 24 hour
}))

app.use(flash())

//Asset
app.use(express.static('public'));
app.use(express.json())

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    //res.locals.user = req.user
    next()
})


//set template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine', 'ejs');

require('./routes/web')(app) //ye ek function receive karega..

const PORT=process.env.PORT || 3300

app.listen(PORT,()=>{
    console.log(`Server is listining on ${PORT}`);
})