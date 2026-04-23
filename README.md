# Ts_Basics
# 1) learned about the  ts basic types
   
<img width="1702" height="652" alt="Screenshot from 2026-01-21 16-18-54" src="https://github.com/user-attachments/assets/c9570c20-1b89-4426-94b2-1d0b7c52964f" />

# 2) learned about interface read only and optional fields

<img width="2262" height="948" alt="Screenshot from 2026-01-21 16-19-58" src="https://github.com/user-attachments/assets/beca0556-2d31-4325-be55-2903674a5f70" />

# 3) learned about union

 <img width="2376" height="1374" alt="Screenshot from 2026-01-21 16-21-18" src="https://github.com/user-attachments/assets/5d804395-f66f-4ff7-b2b1-daf7688f9623" />

# 4) learned abbout Enum

<img width="1576" height="1026" alt="Screenshot from 2026-01-21 16-22-17" src="https://github.com/user-attachments/assets/cb278421-d9fc-4b52-a459-50593de2ba0f" />

# 5) learned about generics

<img width="2006" height="1292" alt="Screenshot from 2026-01-21 16-22-46" src="https://github.com/user-attachments/assets/d6f73900-d0a6-4030-a359-9267ca416c9f" />

# 6) learned about ts utilityTypes (Partial,Required,Pick,Omit,ReadOnly,Exclude,NonNullabe)

```interface MyData {
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

```

