// for each loop 

const coding = ["js", "java", "c", "cpp", "python", "ruby"]

// 1.
coding.forEach( function (item) {
    console.log(item);
})

// 2.
coding.forEach( (item) => {
    console.log(item);
})

// 3.
//coding.forEach(printMe())

// 4.
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);   
})