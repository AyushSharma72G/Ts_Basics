let name:string= "Ayush";

let names: string[] = ["ayush", "sharma", "xyz"] // array of strings

let digits: number[] = [1, 2, 3, 4, 5] // array of nnumbers 

let isDone: boolean = false

let a:any = "Any data type" // when we are not sure about the type we use any type

let Arr1:any[] = ["xyz",1,2,false] // data type are not restricted when the type is any 


// functions in ts

// function concatValues(a:number, b:number):number {
//     return a + b;
// }

// console.log(concatValues(5,3))


// interface in ts  -> an interface is used to create a blue print for an object as the object can have 
// different types like string and number 


interface UserInterface {
    readonly id: string,  // readonly fields cannnot be changed 
    name: string,
    age?: number, // if we add ? after the field it will become optional  anf the value it contains is undefined 
    isAlive: boolean
    getAge(): number;
}

const User: UserInterface = {
    id: "E202",
    name: "Ayush Sharma",
    // age: 22,
    isAlive: true,
    getAge(): number {
        if (this.age === undefined) {  // the age can be undefined as it is optional field inn the interface
            throw new Error("age is not defined")
        }
        return this.age    //this refers to the current object 
    }

}

//  all the fields in the interface are required and must be in the object 
// User.age="22" // error 


// console.log(User.age); // will give undefined


// we can also add conditonal statements based on the data present 

// User.age ? console.log(`Age of ${User.name} is ${User.age}`) : console.log(`Age not found`)

try {
    console.log(User.getAge())
} catch (error) {
    if (error instanceof Error) { // check if the error is the one which we throw from the getAge function 
        console.log(error.message)
    } else {
        console.log("Unknown error")
    }
}