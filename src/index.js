import express from 'express'
import connectDB from './config/dbConfig.js';

const PORT = 3000;

const app = express();


app.get('/ping', (req,res) => {
    res.json({message:'hello'})
})


app.listen(PORT,()=>{
    console.log("server is listening.......");
    connectDB();

})

