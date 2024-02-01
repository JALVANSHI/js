const mynumes =[1,2,3,4,5,6,7,8,9,10]
const values=mynumes.map((nm)=>nm*10)
                    .map((nm)=>nm+1)
                    .filter((nm)=>nm>40)
console.log(values);