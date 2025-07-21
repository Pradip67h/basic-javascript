let a = 300

if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}
console.log(a);


function one(){
    const username = "Pradip"

    function two(){
        const website = "instagram"
        console.log(username);
    }
   // console.log(website);
    two()
}
one()

if(true){
    const username = "Atanu"
    if (username === "Atanu") {
        const website = " Facebook"
        console.log(username + website);
    }
  //  console.log(website);
} 
// console.log(username);


// ++++++++++++++ interesting +++++++++++++++++


console.log(addone(5));     // 6
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));         // 7
