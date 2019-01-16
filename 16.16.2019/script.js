// wrie a pure function that will add 'ski' at the end of given 
// last names in an array 
let lastNames = [`Petrov`,`Sulejmanov`,`Cavkov`,`Donev`,`Mitev`,`Artemov`]


// write a resursive function for calculating factoriel of given number 
// 6!=== 720


// Write a resursive function for calculating sum of given array of number 
let numArray = [5 ,12 ,6 ,2 ,765 ,2 ,12 ,36 ,4 ,67 ,2 ,1 ,85]

//Write a closure function that will calculate square of given number //
//Write the samecalculate 


////1/////
// const addSki = arr => {
//     let result = [];
//     arr.forEach(lastName => result.push(lastName + 'ski'))
//     return result 
// } 
// console.log (addSki(lastNames)) 

////2////
 
// const factoriel = num => num === 1 ? 1 : num * factoriel(--num);
// console.log(factoriel(6))


/////2 Closures funct//////
// (() => {
//     const outer = (a) => {
//         const inner = b => {
//             return a + b;
//         }
//     return inner
//     }   

// let sumWithFive = outer(5)(5)
// console.log (sumWithFive)