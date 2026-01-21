interface MyData {
    name: string,
    age: number,
    address: string,
    hobbies?: number
}


// let yourData: MyData = { // keeping all the fields here is necessary as they exist in the interface
//     name: "Ayush",
//     age: 22,
//     address: "XYZ",
//     hobbies: 2
// }


let yourData: Partial<MyData> = { // if we use Partial then all the fields become non necessary 
    // name: "Ayush",
    age: 22,
    // address: "XYZ",
    // hobbies:10
}

// same for a funcction arguments 

function printData(data: Partial<MyData>) {
    console.log(data)
}

// printData({ name: "Ayush", age: 22, address: "Ayush", hobbies: 1 }) // send all the fields when we are not using partial 

printData({ name: "Ayush" }) // sending only name still no error 




// Required 


// let yourData2: Required<MyData> = { // if we use required then all the fields become required even the optional field like hobby 
//     name: "Ayush",
//     age: 22,
//     address: "XYZ",
//     // hobbies: 10    // error hobbies field required
// }



// ReadOnly


let yourData3: Readonly<MyData> = { //  we cannot chnage the data  
    name: "Ayush",
    age: 22,
    address: "XYZ",
    hobbies: 10    // error hobbies field required
}


// yourData3.hobbies= 20; // error as the youData3 is Readonly



// Pick 
let yourData4: Pick<MyData, "name" | "age"> = { //  if we only want some of the properties then 
    // we can pick the properties seperately 
    name: "Ayush",
    age: 22,
}


// Omit
let yourData5: Omit<MyData, "name" | "age"> = { //  if we only do not want some of the properties then we can omit them 
    address: "XYZ",
    hobbies: 10
}




// Exclude 

type Status = "success" | "error" | "loading";

type FinalStatus = Exclude<Status, "loading">;  // remove loading from the union 
// "success" | "error"

// real world use case  
// API status handling

type ApiStatus = "idle" | "loading" | "success" | "error";

type ReadyStatus = Exclude<ApiStatus, "loading" | "idle">;  // use when Rendering UI Enforcing valid states

// "success" | "error"


// NonNullable

type Value = string | null | undefined;  // Removes null and undefined from a type.
 
type SafeValue = NonNullable<Value>;
// string

