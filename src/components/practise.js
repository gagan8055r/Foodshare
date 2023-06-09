// let arr=[10,2,4,20,9,40];

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
//     },
//     myAge:21,
//     getData(){
// console.log(`my realname is ${this.myInfo.realName} and fontname is ${this.myInfo.fontName} and my age is ${this.myAge}`);
//     }
// }
// // bioData.getData();

const array=["gag","lal","gav"]

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(...array,);

// const[first,second,third]=array
// console.log(first);
// console.log(second);
// console.log(third);
// let name="vinod"
// // let sum=20+6
// const obj={
//     [name]:"hello",
//     age:21,
//     branch:"ece",
//     [15+5]:"is my age"
// }
// // let age=obj.age
// // let{name,age,branch}=obj
// // console.log(branch);
// // console.log(name);
// // console.log(age);
// // console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let place="'bengaluru'"
// console.log(place.padStart(15));
// console.log(place.padEnd(15));

////if i have array inside array inside and inside array in a array to faltten this  we use flat function console.log(array.map(3))


// const obj={
//     age:21,
//     place:'mysore'
// };

// console.log(obj);

// const fat=Object.entries(obj)
// console.log(Object.fromEntries(fat));
// // const arrays=fat.flat(1)
// console.log(arrays[3]);
// const num=Number.MAX_SAFE_INTEGER
// const big=console.log(9007199254740991+211);
// console.log(typeof big);

// const full=NaN??"default"


function add (a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

const calculator=(num1,num2,oper)=>{
return oper(num1,num2);

}

console.log(calculator(2,3,add));
console.log(calculator(2,3,sub));
// console.log(full);
