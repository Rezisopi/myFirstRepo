// 1 Write a function called displayFullName using object destructing for the parameters 
// * and the return of the function should be "Hi my name is [your name ]"

//2 Get the second fourth and seventh value of the array by using destructing// 


let array = [1,`GetMe`,"run",`GetMe`,666,`GetRich`,`GetMe`,`DontGetMe`, true ,() => {}]
console.log(Array.of(array[1],array[3],array[6]))


// Using destructing get the value `GetMe` from our object // 
let obj = {
    myProp : `GetMe`,
    mySecProp: `DontGetMe`

}
let obj2 = {
    myProp: `DontGetMe`,
    mySecProp:`DontGetMe`,
    myThirdProp: {
        myProp:`GetMe`
    },
}

let obj3 = {
    myProp: `DontGetMe`,
    mySecProp: `DontGetMe`,213121
    myThirdProp:{
        myProp: [ `DontGetMe`,`DontGetMe`,`GetMe`]
        
    }
}

let obj4 = {
    myProp:`DontGetMe`,
    myThirdProp: {
        myProp [`DontGetMe`,`DontGetme`,`GetMe`]
    },
    myFifthProp:{
        myProp:`DontGetMe`,
        mySecProp: [`DontGetMe`,`DontGetMe`,`DontGetMe`],
        myThirdProp:`GetMe`
    }
}