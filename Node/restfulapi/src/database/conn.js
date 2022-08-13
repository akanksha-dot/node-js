const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users_api", {
    useNewUrlParser:true,
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("NO CONNECTION");

    mongoose.connect('error', (error) => {
        console.log(error)
    })

})