const mongoose=require('mongoose');

const mongo_url="mongodb://localhost:27017/project1";

mongoose.connect(mongo_url,{
//    useNewUrlParser:true,
//    useUnifiedTopology:true 
});

const db=mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to MongoDB');
})
db.on('error',(err)=>{
    console.log('Error in connecting to MongoDB',err);
})
db.on('disconnected',()=>{
    console.log('Disconnected from MongoDB');
})
 
module.exports=db;