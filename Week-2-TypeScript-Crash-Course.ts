//Author: Ziad Ewais
//Description: This is a quick crash course for the addition of TypeScript on top of your JavaScript knowledge.
//
//////////////////Introduction
//JavaScript is a great language with it downfalls.
//One of the biggest issues with JavaScript is the lack of data type constrains, aka weakly typed language.
//This is where TypeScript comes in. It is not a new language, but rather, a data type harness to JavaScript.
//So in a nutshell, JavaScript + Data type information = TypeScript
//TypeScript file have the extension of .ts
//Browser cannot execute TypeScript. This is why TS file need to be compiled into JS using the tsc command
//TypeScript Compiler (tsc) will create a new .js file with the same file name. To run, simply open cmd, and type "tsc <filename>"
//Example of the issue TS solves
//// JS function example
// function add(a, b) {
//   return a + b;
// }
// console.log(5 + 10) the result is 15
// console.log("5" + 10) the result is 510
//
//// TS function example
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(5 + 10) the result is 15
// console.log("5" + 10) TYPESCRIPT ERROR
//
//Important Concepts
//TypeScript catches many mistakes before the program runs
//TypeScript does not replace JavaScript
//Valid JavaScript is generally valid TypeScript
//Type information disappears after compilation
//TypeScript improves editor autocomplete and refactoring

/////////////////Variables, Primitive Type, and Type Inference
//Types for variables is adding a colon then the variable type before assigning a value
let studentName: string = "John";
let age: number = 28;
let tuitionPaid: boolean = true;

//If you do not add a type to a variable, it will be infered from the initial value assigned
let anotherStudentName = "Jane";
console.log(typeof anotherStudentName); //it prints "string"
//anotherStudentName = 55 //this is will cause a type error assigning a number to a string variable

//if a variable needs to be type agnostic, you can use the <any> type
let anyVariable: any = "This is an any variable";
anyVariable = 55;
anyVariable = false;

///////////////////Arrays
//an array in TS can hold single typed data or mixed typed data
//to assign a single type to an array, we add [] to the end of the single type
const studentGrades: number[] = [95, 56, 14, 98, 68];
studentGrades.push(30);
//studentGrades.push("Twelve") // will cause a type error
//Another way of assigning a single type to an array is by adding the keyword Array<type>
const studentHobbies: Array<string> = ["Swimming", "Gaming", "Bees keeping"];
//studentHobbies.push(55) // will cause a type error

////////////////////Functions
//A function must have a RETURN type or it will be considered to return VOID
//Paramaters must have declared types as well
function greetings(name: string): string {
  return `Hello ${name}`;
}
console.log(greetings("John"));
//Parameters can have default values as well
const greetings2 = (name: string = "stranger"): string => {
  return `Good day ${name}`;
};
console.log(greetings2());

////////////////////Objects and interfaces
//Objects are a collection data type where data is stored in a pair of key and value. Each pair is separated with a comma
//In TS, each key should have a type or inferred one.

const student = {
  id: 1, //type inferred to be number
  studentName: "John Doe", //type inferred to be string
  tuitionPaid: 12000, //type inferred to be number
  hasAttendedOrientation: true, //type inferred to be boolean
};

//Also, object can have their keys' types declared before assignment. Type declerations does not need commas to seperate them
const typedStudent: {
  id: number;
  studentName: string;
  tuitionPaid: number;
  hasAttendedOrientation: boolean;
} = {
  id: 2,
  studentName: "Jane Doe",
  tuitionPaid: 15200,
  hasAttendedOrientation: true,
};

//As you can see, this process is long if you need to initialize a new student each time
//The solution to create a template, better known as an Interface
//An interface is not an object, but rather, the blueprint of an object

interface student {
  id: number;
  studentName: string;
  tuitionPaid: number;
  hasAttendedOrientation: boolean;
  hobbies?: string[]; //this property can be optional using the <?> before the type.
}

//Then you can create an instance of the interface
const interfacedStudent: student = {
  id: 3,
  studentName: "Johnny Doe",
  tuitionPaid: 11000,
  hasAttendedOrientation: false,
};

//This shines more when you want to create an array of students
const students: student[] = [
  {
    id: 10004,
    studentName: "Buffy the vampire slayer",
    tuitionPaid: 14000,
    hasAttendedOrientation: false,
    hobbies: ["vampire hunting", "hang out with warewolves"],
  },
  {
    id: 10005,
    studentName: "Sabrina the teenage witch",
    tuitionPaid: 12500,
    hasAttendedOrientation: true,
    //No hobbies data does not cause an error
  },
];

///////////////////////Unions
//If you want a variable to have several types, we use the <|> between the types

let studentId: number | string;
studentId = 123; //can store a number
studentId = "ABC123"; //or a string without issues

function displayId(id: number | string) {
  console.log(id);
}

//////////////////////Types and Literal unions
//You can create a custom type
type ID = number | string;
let studentID: ID = "132ABC";

type Status = "active" | "inactive" | "graduated";
let studentStatus: Status = "active"; //this variable can only hold one of the three statuses

//Types and interface can be used interchangably
type StudentObject = {
  studentId: number | string;
  studentName: string;
  tuitionPaid: number;
  hasAttendedOrientation: boolean;
};
//To not confuse both techniques, we can stick with interfaces for Objects, and types for variables
