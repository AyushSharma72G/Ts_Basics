// an interface is a way to define the shape of an object it have the name of the properties the object along with
// its type
function PrintPerson(P) {
    if (P.age > 20) {
        console.log("the detials of the person are: ", "name:", P.name, "age:", P.age, "address:", P.address, "hobbies:", P.hobbies);
    }
}
var P1 = {
    name: "Ayush",
    age: 22,
    //   address: "Xyz indore",   // no error as the address is optional in interface
    hobbies: ["abc", "xyz"],
};
var shape = {
    color: "red",
    shapeName: "Square",
};
console.log("shape ", shape);
