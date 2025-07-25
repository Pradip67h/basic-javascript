//  Immediately Invoked Function Expression -(IIFE)
function one(){
    console.log(`DB CONNECTED`);
}
one();                                // DB CONNECTED

(function two(){
    console.log(`DB CONNECTED`);
})();                                  // DB CONNECTED

( function three() {
    // named IIFE
    console.log(`DB CONNECTED THREE`);
})();                                    // DB CONNECTED THREE

( () => {
    console.log(`DB CONNECTED TWO`);
})();                                  // DB CONNECTED TWO

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Pradip');                                    // DB CONNECTED TWO Pradip




//++++++++++++ this code is only used for browser   ++++++++++
// function one(){
//     console.log("one");
//     {two}
// }
// function two(){
//     console.log("two");
//     {three}
// }
// function three(){
//     console.log("three")
// }

// one{}
// two{}
// three{}