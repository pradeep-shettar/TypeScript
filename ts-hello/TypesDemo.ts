let message; // defaults to any type.
message = 'abc';
console.log(message);
let endsWith = message.endsWith('c');
/*
As the type of 'message' is 'any', 
we need to explictly specify the type for using endsWith.
This is called 'Type Assertions'

There are two ways to do it.
*/

//Type Assertions way - 1
let endsWithTypeAssertion = (<string> message).endsWith('c');
console.log("The message: " + message + "\nEnds with c? " + endsWithTypeAssertion);
//Type Assertions way - 2
let alternateWay = (message as string).endsWith('b');
console.log("Ends with b? " + alternateWay);

/*
Type Assertion does not change the type of the variable at run time.
It will not restructure the variable in memory.
It is just a way of informing the compiler, so that we can access the intellisense.
*/

/*
As '.endsWith' is a ES6 function, 
we must target it to the same and compile the TypeScript 
command: tsc --target ES6 TypesDemo.ts
*/