type datatype = string | number | string[]


// const GetData = (data: string | number | string[]) => {  // the data can be either string or number or Arrray 
//     //  so we are using union to apply all three
//     return data;
// }


const GetData = (data: datatype) => {  // using custom type for declaring the types the data can hold
    return data;
} 

console.log(GetData('Ayush'))
console.log(GetData(60))
console.log(GetData(["ayush", "xyz"]))



// intersections 

interface user {
    name: string,
    email?: string
}
interface admin {
    isAdmin: boolean,
}

type role = user & admin  //this is the intersection of both the interfaces 

function login(currentUser: role): void {
    console.log(`the name of the user is ${currentUser.name} and  ${currentUser.isAdmin ? "the role is Admin" : "the role is User"} `)
}

login({
    name: "Ayush",
    isAdmin: true
})