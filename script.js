// function myfullName(name ,nickname , lastName) {
//     if(nickname === undefined) {
//         return `${name} ${lastName}`

//     }
//     return `$ {name} ${nickname} ${lastName}`
// }
// console.log(myFullName)(`rezi`,`sopi` ,`igeto`))

//function that returns the sum of all numbers between 0
//and the number parameter we pass to that function
function sumTo(num) {
    let sum = 0;
    for(let i = 0; i <=num;i++){
        sum += i;
    }
    return sum;
}
console.log(sumTo(10))
