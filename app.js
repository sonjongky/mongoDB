const express=require('express');
const logger = require('morgan')
const mongoose = require('mongoose');
const app=express();
const port = 3000;

const usersRoute=require('./routes/user')
//middleware
app.use(logger('dev'));

//Routes 
app.use('/users',usersRoute);



//Routes the
app.get('/', (req, res,next) => {
    return res.status(200).json({
        message: 'Server is OK '
    })
  })

//Catch 404 Errors and forwad them to error 
app.use((req,res,next)=>{
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})


//handle Error 
app.use(() =>{
    const error =app.get('env') === 'development'
    const status = err.status || 500

    //response to client 
    res.status(status).json({
        error:{
            message:error.message
        }
    })
})
//Start Server 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })