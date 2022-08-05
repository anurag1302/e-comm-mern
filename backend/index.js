const express = require('express');
const app = express();

app.get("/",(req,res)=>
{
    res.send("Node backend is working fine again!!!");
});

app.listen(5000);