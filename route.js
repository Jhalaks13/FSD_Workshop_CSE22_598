const express=require("express");
const app=express();

app.use(express.json());

let student ={
    id: 1,
    name: "Rohan",
    rollno: 20,
    email:"rohan@example.com",
    course: "MCA"
};

//get display
app.get("/student",(req,res)=>{
    res.send(student);
});

//post(insert)
app.post("/student",(req,res)=>{
    student=req.body;
    res.send("student added successfully");
});
//put(update)
app.put("/student",(req,res)=>{
    student=req.body;
    res.send("student updated successfully");
});
//delete
app.delete("/student",(req,res)=>{
    student={};
    res.send("Student deleted successfully");
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});