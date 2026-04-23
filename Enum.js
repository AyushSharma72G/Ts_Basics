// numeric enums
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 1] = "Up";
    Directions[Directions["Down"] = 2] = "Down";
    Directions[Directions["Left"] = 3] = "Left";
    Directions[Directions["Right"] = 4] = "Right";
    // so the values of Down = 2 , Left = 3, Right = 4
})(Directions || (Directions = {}));
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
function getDirection() {
    return 4;
}
var D;
(function (D) {
    D[D["Up"] = getDirection()] = "Up";
    // Down, // if i am using a fucntion to get the value of the first enum then I need to intialize the later
    //declared enum members they will not auto increment
})(D || (D = {}));
// String enums
var Cars;
(function (Cars) {
    // In string enums each member must be intialized with a string literal
    Cars["Small"] = "Auto";
    Cars["Medium"] = "Swift Desire";
    Cars["Large"] = "Suv";
})(Cars || (Cars = {}));
// NOTE: The string enums are useful at the time of debugging as it conveys a useful message
//    while the numeric enums do not convey any message
// Enums at runtime
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function AccessEnumE(En) {
    for (var val_1 in E) {
        console.log(E[val_1]);
    }
}
// AccessEnumE(E);
// REVERSE MAPPING
// just like we can access the enum member value form the enum member we can also access the enum member from the value of the enum member
var A;
(function (A) {
    A[A["P"] = 10] = "P";
    A[A["Q"] = 11] = "Q";
    A[A["R"] = 12] = "R";
    A[A["S"] = 13] = "S";
})(A || (A = {}));
console.log("enum value from the member", A.P);
var val = A.P;
// reverse mapping
console.log("enum value from the member", A[val]);
