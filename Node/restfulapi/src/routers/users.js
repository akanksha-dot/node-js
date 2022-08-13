const express = require("express");

const router = new express.Router();



const Users = require ('../models/users');

/* CREATE NEW USER /*

/* NOW CREATE ROOT */

router.post("/users", async(req,res)=>{
    console.log(req.body);
   
/* to save in database */
    // userr.save().then(()=>
    // {
    //       res.status(201).send(userr);
    // }).catch((e)=>{
    //     res.status(400).send(e);
    // })

    /* now we use asynchronous await instead of promise*/
    try{
        const userr=  new Users(req.body);
        const  createuser = await userr.save();
        res.status(201).send(createuser);

    }
    catch(e){
        res.status(400).send(e);
    }

    // res.send("Hello welcome to Bingo Live!!");
})
    


router.get("/users", async(req,res)=>{
      try{

       const UserData= await  Users.find();
       res.status(200).send(UserData);

    }
    catch(e){
           res.status(400).send(e);
    }
})

/* get individual data */

router.get("/users/:id",async(req,res)=>{
    try{
       const _id = req.params.id;
       const UserData_specific = await Users.findById({_id});
     if(! UserData_specific){
            return res.status(401).send("Data Not Found");
     }
     else{
        res.status(200).send(UserData_specific);
     }
       
    }
    catch(e){
   res.status(500).send(e);
    }
})

/* Delete the data */
router.delete("/users/:id",async(req,res)=>{

    try{
              const _id = req.params.id;

            const delete_user = await  Users.findByIdAndDelete({_id});
            if(!delete_user){
               return res.status(400).send("User Not Found");
            }
            else{
             res.status(200).send("User Deleted Successfully");
            }
    }
    catch(e){
         res.status(500).send(e);
    }
    
})

/* update user by id */

router.patch("/users/:id",async(req,res)=>{
    try{
           const _id =req.params.id;
           const update_user =  await Users.findByIdAndUpdate(_id,req.body,{
                     new : true
           });
           if(! update_user){
            return res.status(400).send("NOT FOUND");
           }
           else
           {
            res.status(200).send("DATA UPDATED SUCCESSFULLY");
           }
        }
    catch(e){
          res.status(500).send(e);
    }
})
router.put("/users/:id",async(req,res)=>{
    try{
           const _id =req.params.id;
           const update_user =  await Users.findByIdAndUpdate(_id,req.body,{
                     new : true
           });
           if(! update_user){
            return res.status(400).send("NOT FOUND");
           }
           else
           {
            res.status(200).send("DATA UPDATED SUCCESSFULLY");
           }
        }
    catch(e){
          res.status(500).send(e);
    }
})
module.exports = router;