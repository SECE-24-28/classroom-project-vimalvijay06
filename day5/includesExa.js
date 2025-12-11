let employee=[
    {ena:"Arun",mob:101},
    {ena:"Ajay",mob:102},
    {ena:"Kumar",mob:103},
    {ena:"Akash",mob:104},
    {ena:"Abdhul",mob:105}
]
let newEmp = employee.filter((emp)=>
{
   return emp.ena.includes("A");
})
console.log(newEmp)