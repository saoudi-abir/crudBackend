//CRUD
const mongodb = require('mongodb')
const mongoose = require('mongoose')

const MongoClient = mongodb.MongoClient


const url = 'mongodb+srv://Anshuman:vMqX48TjL2PVwKZ7@cluster0.3hcfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
MongoClient.connect(url,(error,client) =>{
    if (error)
    return
    console.log(client)
    const db = client.db('test');

    const Schema = mongoose.Schema
    const userSchema = new Schema({
        name:{
            type:String,
            required:true,
            trim: true
        },
        age:{
            type:Number,
            required:true,
            validate(value){
                if (value < 0)
                throw new Error('Age must not be negative')
            }
        },
        email:{
            type:String,
            required:true,
            validateate(value){
                if(!validator.isEmail(value))
                throw new Error('It is Shoul be an email')
            }
        },
        password:{
            type:String,
            required:true,
            minlength: 5
        }
    })
 //   const User = mongoose.model('User', userSchema)
  //  module.exports = User;
  //  db.collection('users').insertOne({
   //    name: 'Anshuman',
  //     age: 21
  // })
//.then(res => console.log(res.ops))
//.catch(e => console.log(e))
//})

//db.collection('users').insertMany([
 //   {
 //   name: 'Vinay',
 //   age: 27
//    },
//    {
 //       name: 'Vinay',
//        age: 25
  //      }
  //  ])
//.then(res => console.log(res.ops))
//.catch(e => console.log(e))
//})
//db.collection('users').findOne({age:27})
//.then(res => console.log(res))
//.catch(e => console.log(e))
//})
//db.collection('users').find({}).toArray()
//.then(res => console.log(res))
//.catch(e => console.log(e))
//})
//db.collection('users').updateOne({age:21},
   // {
   //     $set:{
  //          age:59
  //      }
  //  })
//.then(res => console.log(res))
//.catch(e => console.log(e))
//})
//db.collection('users').updateMany({},
//    {
  //      $inc:{
  //          age:1
 //       }
//    })
//.then(res => console.log(res.modifiedCount))
//.catch(e => console.log(e))
//})
//db.collection('users').deleteOne({name:'Anshuman'})
//.then(res => console.log(res.modifiedCount))
//.catch(e => console.log(e))
db.collection('users').deleteMany({})
.then(res => console.log(res.deletedCount))
.catch(e => console.log(e))
})