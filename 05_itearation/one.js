

for(let i = 0; i <10; i++)
{
    const element  = i;
    // console.log(element);
    if(element == 5)
    {
        // console.log("5 is best number");
    }
    // console.log(element);
}

/*
for(let i = 1; i <= 10; i++)
{
    console.log(`Outer loop value ; ${i}`);
    for(let j = 1; j <= 10; j++)
    {   
        // console.log(`inner loop value : ${j} and  inner loop ${i}`);
        console.log(i + `*` + j + ` = ` +i*j );
    }
    // console.log("",\n);
}
*/

for (let index = 0; index <= 20; index++)
{
    if(index == 5)    
    {
        console.log(`Detected `);
        continue;
    }
    console.log(`Value of i is ${index}`);
}