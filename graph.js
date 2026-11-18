const express=require('express');
const { graphqlHTTP }=require('express-graphql');
const {buildSchema}=require('graphql');
 
const schema=buildSchema(
    typeQuery {
        Name:String
        Email:String
        RollNo:Int
    }
);
const root={
    Name: () =>{
        return 'Krishna';
    },
    Email: () =>{
        return 'abc@gmail.com';
    },
    RollNo: () =>{
        return 18;
    }
};

const app=express();
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql: true,
}));
app.listen(4000, ()=>{
    console.log('Server running at http://localhost:4000/graphql');
});
