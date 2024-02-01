for(let i=1;i<=10000;i++){
    console.log(`the table of ${i} is :`);{
        for(let j=1;j<=10;j++){
            // console.log(`the inner loop is ${j} and the outer loop is ${i}`)
            console.log(`${i}` + '*' + j + "=" + i*j);
        }
    }
}