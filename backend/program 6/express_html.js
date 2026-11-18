const express=require('express');
const app=express('path');
const app=express();

app.use(express.static('public'));
app.listen(4000, () =>{
    console.log('server is running on http://localhost:4000');
});

