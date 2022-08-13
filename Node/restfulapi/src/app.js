const express = require("express");
require("./database/conn");
const Users = require('./models/users');
const UsersRounter =require('./routers/users');
const app = express();
const port= process.env.PORT || 3000;


app.use(express.json());
app.use(UsersRounter);

// app.get("/",(req,res)=>{
//     res.send("Hello welcome to Bingo Live!! LIVE STREAMING");
// })


app.listen(port,()=>{
    console.log('connection is setup at ${3000}');



})