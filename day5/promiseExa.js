console.log("process 1")
setTimeout(()=>
{
    
    setTimeout(()=>
    {
        console.log("process 3")
    })
    console.log("process 2")
},2000)