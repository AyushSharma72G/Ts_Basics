// enum is a way to define named constants , Group Related values, and use the values with type safety

// numeric enums
enum Directions {
  Up = 1,
  Down,
  Left,
  Right, // here the remaining values of the enum auto increment itself taking Up=1 as the starting value
  // so the values of Down = 2 , Left = 3, Right = 4
}
// if there was no value of the Up = 1 then the default value would be 0 and
// then other variables would increase from 0 to 4

// function getDirection(): string {
//   return "Ayush";    // cannot use this call inside the enum as this return a strirng
// }

// {
//   1: "Up",
//   2: "Down",
//   3: "Left",     // internally ts creats something like this
//   4: "Right",
//   Up: 1,
//   Down: 2,
//   Left: 3,
//   Right: 4
// }

function getDirection(): number {
  return 4;
}

enum D {
  Up = getDirection(),
  // Down, // if i am using a fucntion to get the value of the first enum then I need to intialize the later
  //declared enum members they will not auto increment
}

// String enums

enum Cars {
  // In string enums each member must be intialized with a string literal
  Small = "Auto",
  Medium = "Swift Desire",
  Large = "Suv",
}

// NOTE: The string enums are useful at the time of debugging as it conveys a useful message
// while the numeric enums do not convey any message

// Enums at runtime
enum E {
  X,
  Y,
  Z,
}

function AccessEnumE(En: object): void {
  for (const val in E) {
    console.log(E[val]);
  }
}

// AccessEnumE(E);

// REVERSE MAPPING

// just like we can access the enum member value form the enum member we can also access the enum member from the value of the enum member

enum A {
  P = 10,
  Q,
  R,
  S,
}

console.log("enum value from the member", A.P);
const val = A.P;
// reverse mapping
console.log("enum value from the member", A[val]);

// Infer
// const enum
