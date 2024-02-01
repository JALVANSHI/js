const myvalues =[1,2,3]
const manums=myvalues.reduce(function(acc , curvalm){
    console.log(`acc: ${acc} and the current value is: ${curvalm}`);
return  acc+curvalm
},0)
console.log(manums);