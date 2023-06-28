const path = require("path")
require("dotenv").config({
    path: path.join(__dirname, "../.env")
})

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const appRouter = require("./router")
const cors = require("cors")
const winston = require('winston')
const errorMiddleWare = require('./middleWare/error');

winston.add(new winston.transports.File( {filename: 'error-logs.log'}));

winston.exceptions.handle(new winston.transports.Console() ,new winston.transports.File({filename: 'error-logs.log'}))


process.on('unhandledRejection', ex=>{
    throw ex;
});

// const myPromise = Promise.reject('yana boshqa kutilmagan xato!').then('bitdi');

// throw new Error('kutilmagan xato!')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log(err)
})

app.use(cors())

app.use("/api" , appRouter)

app.use(errorMiddleWare);


app.listen(process.env.PORT , ()=>{
    console.log('Server ishga tushti')
})