const express=require('express');
const router=express.Router();
const Person=require('./../models/Person')



router.delete('/:id', async(req,res)=>{
    const personId=req.params.id;
    try{
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({'error':'Person Not found'});
        }
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({'error':'Internal Server Error'});
    }
});

// for updating the data
router.put('/:id',async(req,res)=>{
    const personId=req.params.id;
    const updatedPersonData=req.body;
    console.log(updatedPersonData);
    try{
        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, // Return the updated document
            runValidators:true // Run Mongoose validation
        });
        if(!response){
          return res.status(404).json({'error':'Person not found'});
        }
        console.log("Person updated");
        res.status(200).json(response);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({'error':'Internal Server Error'});
    }
});

router.get('/',async (req,res)=>{
    try{
       const data=await Person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }
    catch(err)
    {
      console.log(err);
      res.status(500).json({error:"Internal Server error"});
    }
})

router.post('/',async (req,res)=>{
   const data=req.body;
   const newPerson=new Person(data);
   try{
     const savedPerson=await newPerson.save();
     console.log("data saved");
     res.status(200).json(savedPerson);
   }
   catch(err)
   {
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
   }

});

router.get('/:workType', async(req,res)=>{
    const workType=req.params.workType;
    try{
        const data=await Person.find({work:workType});
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({'error':'Internal Server Error'});
    }
})

module.exports=router;