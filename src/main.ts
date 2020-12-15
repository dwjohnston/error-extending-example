import { WError } from './error';

function a() {
    console.log("A is all good"); 
}

function b() {
    console.log("B throws an error"); 
    throw new Error ("I am an error that comes from B"); 
}


function c() {
    console.log("C is all good."); 
}


function run() {
    try {
        a(); 
        b(); 
        c(); 
    } catch(err) {
        throw new Error ("An error occur in the run function."); 
    }
}

function run2() {
    try {
        a(); 
        b(); 
        c(); 
    } catch(err) {
        throw new WError ("An error occur in the run function.", err, {some: 'data'}); 
    } 
}

//run() example - stack trace is lost

// MAC-DJOHNSTON:error djohnston$ node lib/main.js
// A is all good
// B throws an error
// /Users/djohnston/git/error/lib/main.js:18
//         throw new Error("An error occur in the run function.");
//         ^

// Error: An error occur in the run function.
//     at run (/Users/djohnston/git/error/lib/main.js:18:15)
//     at Object.<anonymous> (/Users/djohnston/git/error/lib/main.js:21:1)
//     at Module._compile (internal/modules/cjs/loader.js:778:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
//     at Module.load (internal/modules/cjs/loader.js:653:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:585:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
//     at startup (internal/bootstrap/node.js:283:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)

//run();
run2(); 


//run2() example - 
// MAC-DJOHNSTON:error djohnston$ node lib/main.js
// A is all good
// B throws an error
// /Users/djohnston/git/error/lib/main.js:31
//         throw new error_1.WError("An error occur in the run function.", err, { some: 'data' });
//         ^


// Error: An error occur in the run function.
// Data: {
//   "some": "data"
// }
// Error: An error occur in the run function.
//     at new WError (/Users/djohnston/git/error/lib/error.js:24:28)
//     at run2 (/Users/djohnston/git/error/lib/main.js:31:15)
//     at Object.<anonymous> (/Users/djohnston/git/error/lib/main.js:53:1)
//     at Module._compile (internal/modules/cjs/loader.js:778:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
//     at Module.load (internal/modules/cjs/loader.js:653:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:585:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
//     at startup (internal/bootstrap/node.js:283:19)

// Caused by:
// Error: I am an error that comes from B
//     at b (/Users/djohnston/git/error/lib/main.js:9:11)
//     at run2 (/Users/djohnston/git/error/lib/main.js:27:9)
//     at Object.<anonymous> (/Users/djohnston/git/error/lib/main.js:53:1)
//     at Module._compile (internal/modules/cjs/loader.js:778:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
//     at Module.load (internal/modules/cjs/loader.js:653:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:585:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
//     at startup (internal/bootstrap/node.js:283:19)
