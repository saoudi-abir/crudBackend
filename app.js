const cors = require("cors");
const express= require('express');
require('./utils/db');
const User = require('./utils/db')
const app = express();
//midellwares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.listen(3000);

app.post('/users', async (req,res) => {
    const user = new User (req.body)
    try{
        await user.save()
        res.status(201).send(user)  
    }catch(e){
        res.status(400).send(e)
    }
})
app.get('/users', async (req,res) => {
    try{
        const users = new User.find({})
        if(!users)
       return res.status(404).send()  
       res.status(200).send(users)
    }catch(e){
        res.status(500).send()
    }
})
app.get('/users/:id', async (req,res) => {
    try{
       const user = await User.findById(req.params.id, req.body, {new: true, runValidators})
       if(!user)
       return res.status(404).send()
       res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message)
   }
})
app.patch('/users/:id', async (req,res) => {
    try{
       const user = await User.findByIdAndUpdate(req, params.id)
       if(!user)
       return res.status(404).send()
    }catch(e){
        res.status(500).send(e.message)
   }
})
app.delete('/users/:id', async (req,res) => {
    try{
       const user = await User.findByIdAndDelete(req, params.id)
       if(!user)
       return res.status(404).send()
       res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message)
   }
})