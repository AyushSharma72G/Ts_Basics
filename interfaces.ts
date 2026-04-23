interface Person {
  name: string;
  age: number;
  address?: string; // add a question mark after the field to make it optional
  hobbies: string[];
}

// an interface is a way to define the shape of an object it have the name of the properties the object along with
// its type

function PrintPerson(P: Person) {
  if (P.age > 20) {
    console.log(
      "the detials of the person are: ",
      "name:",
      P.name,
      "age:",
      P.age,
      "address:",
      P.address,
      "hobbies:",
      P.hobbies,
    );
  }
}

const P1: Person = {
  name: "Ayush",
  age: 22,
  //   address: "Xyz indore",   // no error as the address is optional in interface
  hobbies: ["abc", "xyz"],
};

// PrintPerson(P1);

// Extending an interface
interface BasicAddress {
  country: string;
  state: string;
  city: string;
  street: string;
}

interface ExactAddress extends BasicAddress {
  houseNo: string;
  areaPincode: string;
}

// ExactAddress have all the 4 fields of the BasicAddress and 2 fields of ExactAddress

interface ColorFul {
  color: string;
}

interface Shape {
  shapeName: string;
}

// interface ColorFulShape extends ColorFul, Shape {}

// we can also use & to concat the interfaces
type ColorFulShape = ColorFul & Shape;

const shape: ColorFulShape = {
  color: "red",
  shapeName: "Square",
};

// console.log("shape ", shape);

// the difference between the extend and intersection &

// when the types are incompitable it will raise an error

interface Person1 {
  name: string;
}
interface Person2 {
  name: number;
}

// this gives error
// interface Person3 extends Person1, Person2 {

// }

// but it will work file in the case of &
type Staff = Person1 & Person2;

// output;
// type Staff = {
//   name: string & number;  // this is never type and it will cause error when we use it to decalre the name
// };



// the main difference between a type and an interface is that we cannot redeclare the type while we can redeclare
// the interface
