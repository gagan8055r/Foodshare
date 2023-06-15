// let arr=[10,2,4,20,9,40];
// import React from "react";
// import { useReducer } from "react";

// console.log(arr.reduce((acc))=>{
    
// }))

// console.log(Math.min(10,2,4,20,9,40));

// const num=5+'5'-5
// console.log(num);
// console.log(typeof(num));

// console.log(this);

// const bioData={
//     myName:"gagan",
//     myInfo:{
//         realName:"gags",
//         fontName:"big",
// //     },
// //     myAge:21,
// //     getData(){
// // console.log(`my realname is ${this.myInfo.realName} and fontname is ${this.myInfo.fontName} and my age is ${this.myAge}`);
// //     }
// // }
// // // bioData.getData();

// const array=["gag","lal","gav"]

// // console.log(array[0]);
// // console.log(array[1]);
// // console.log(array[2]);
// // console.log(...array,);

// // const[first,second,third]=array
// // console.log(first);
// // console.log(second);
// // console.log(third);
// // let name="vinod"
// // // let sum=20+6
// // const obj={
// //     [name]:"hello",
// //     age:21,
// //     branch:"ece",
// //     [15+5]:"is my age"
// // }
// // // let age=obj.age
// // // let{name,age,branch}=obj
// // // console.log(branch);
// // // console.log(name);
// // // console.log(age);
// // // console.log(Object.values(obj));
// // console.log(Object.entries(obj));

// // let place="'bengaluru'"
// // console.log(place.padStart(15));
// // console.log(place.padEnd(15));

// ////if i have array inside array inside and inside array in a array to faltten this  we use flat function console.log(array.map(3))


// // const obj={
// //     age:21,
// //     place:'mysore'
// // };

// // console.log(obj);

// // const fat=Object.entries(obj)
// // console.log(Object.fromEntries(fat));
// // // const arrays=fat.flat(1)
// // console.log(arrays[3]);
// // const num=Number.MAX_SAFE_INTEGER
// // const big=console.log(9007199254740991+211);
// // console.log(typeof big);

// // const full=NaN??"default"


// function add (a,b)
// {
//     return a+b;
// }

// function sub(a,b)
// {
// //     return a-b;
// // }

// // const calculator=(num1,num2,oper)=>{
// // return oper(num1,num2);

// // }

// // console.log(calculator(2,3,add));
// // console.log(calculator(2,3,sub));
// // // console.log(full);

// // var myName;
// // let myName="dcvfbn";
// // let myName="dfghj"
// // var myName="dfghj"
// // var myName="dfghj"
// // console.log(myName);
// // // myName="gagan"
// // console.log(myName);

// // hoisting is the property in js where the variable name defined using var keyword 

// // const fun1=()=>{

// //     console.log("this is fun 1");
// //   fun2();
// //   console.log("this is fun 1 again");
// // }

// // const fun2=()=>{
// //     console.log("this is fun 2");
// // }

// // fun1();
// // const fun1=()=>{

// //     console.log("this is fun 1");
// //   fun2();
// //   console.log("this is fun 1 again");
// // }

// // const fun2=()=>{

// //     setTimeout(()=>{

// //         console.log("this is fun 2");
// //     },2000)
// // }

// // fun1();

// // function sum(num1){
// // return function(num2){
// //     return function(num3)
// //     {
// //         return num1+num2+num3;
// //     }
// // }
// // }


// // console.log(sum(5)(3)(5));



// // usereducer hook is react used in state management it will be having two parameters that take reducer function and initial state 
// // in reducer function it should be pure functions (means it should not effect any state values and should give same results for same argument passed in it) and 
// // it takes 2 arguements action and state  and it should return any value
// const reducer=(state,action)=>{
// return state;
// }


// const[state,dispatch]=useReducer(reducer,initialState)

// return
// (
//     <div>


//     </div>
// )

// const fs = require('fs');
// // fs.writeFileSync("index.txt","hello")
// fs.readFile("index.txt","utf-8",(err,data)=>{
    //     console.log(data)
    // })
    // // console.log(content.toString());
    
    
//     const http = require('http');
//     // const url = require('url');
    
//     const server=http.createServer((req,res)=>{
//         const pathName=req.url

//     if(pathName==="/")
//     {

//         res.writeHead(200)
//         res.end("hello this is my first website")
//     }
//     if(pathName==="/home")
//     {

//         res.writeHead(200)
//        res.end("hello this is home page")
//     }
//     if(pathName==="/about")
//     {

//         res.writeHead(200)
//        res.end("this is about page")
//     }
//     if(pathName==='/contact')
//     {

//         res.writeHead(200)
//        res.end("this is conatct page")
//     }
//     if(pathName==='/services')
//     {

//         res.writeHead(200)
//        res.end("this is services page")
//     }
//   else
//   {
// res.writeHead(404)
//       res.end("error 404 page not found")
//   }
// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("the website is running at port number 8000....");
// })


const http = require('http');
const fs = require('fs');
// const path = require('path');


const data=fs.readFileSync("data.json","utf-8")
const dataObj=JSON.parse(data)
const server = http.createServer((req, res) => {
  const pathName = req.url;
  

  if (pathName === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is my first website');
  } else if (pathName === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is the home page');
  } else if (pathName === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page');
  } else if (pathName === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the contact page');
  } else if (pathName === '/services') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the services page');
  } 
         else if(pathName==='/api')
         {   res.writeHead(400,{
          "Content-type":"application/json"
         })
         res.end(data)

         }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Error 404: Page not found');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('The website is running at port number 8000....');
});


