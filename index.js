const express=require('express');
const db=require('./db');
require('dotenv').config();
const app=express();

// for ready json data in post request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("<h2> Welcome to Express JS learning...");
})



// Importing the router file
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');


// Using the routers
app.use('/person',personRoutes);
app.use('/menuitem',menuItemRoutes);

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`);
});
