let student=[{sna:"Praveen",age:24,sma:94},
    {sna:"Vijay",age:23,sma:88},
    {sna:"Akash",age:27,sma:92}]
let result = student.some((stu)=>{
    return stu.age>26;
})
console.log(result);
let newStu=student.filter((stu)=>{
    return stu.sma>90;
})
console.log(newStu);