const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');



router.get("/:taste", async(req,res)=>{
    const taste=req.params.taste;
    try{
        const data=await MenuItem.find({taste:taste});
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({'error':'Internal Server Error'});
    }
})
router.get("/", async (req,res)=>{
    try{
      const data=await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data);
    }
    catch(err)
    {
      consol.log(err);
      res.status(500).json({"error":"Internal Servere Error"});
    }
});

router.post("/", async(req,res)=>{
  const data=req.body;
  const newMenuItem=new MenuItem(data);
  try{
    const savedMenuItem=await newMenuItem.save();
    console.log("MenuItem saved");
    res.status(200).json(savedMenuItem);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({"error":"Internal Server Error"});
  }
})

module.exports=router;