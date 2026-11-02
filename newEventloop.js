const { useCallback } = require("react");

console.log("This is the starting point of my code.");
process.nextTick(()=>{
    console.log("This is process.nextTick code");
});
new Promise((resolve,reject)=>{
    let success=false;
    if(success)
        resolve("Data loaded successfully");
    else
       reject("Something went wrong");
})
setTimeout(()=>{
    console.log("This is first timeout function");
},5000);
setTimeout(()=>{
    console.log("This is first timeout function");
},2000);
setTimeout(()=>{
},0);
console.log("This is the end point of my code");