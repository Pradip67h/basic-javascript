const coding = ["js", "java", "c", "cpp", "python", "ruby"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item; 
})

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1.
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);

// 2.
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1979, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1989, edition: 2007},
    { title: 'Book Four', genre: 'Science', publish: 1982, edition: 2009},
    { title: 'Book Five', genre: 'Mathematics', publish: 1989, edition: 2004},
    { title: 'Book Six', genre: 'Biology', publish: 1941, edition: 2002},
    { title: 'Book Seven', genre: 'Geography', publish: 1928, edition: 2005},
    { title: 'Book Eight', genre: 'Chemistry', publish: 1998, edition: 2001},
    { title: 'Book Nine', genre: 'History', publish: 1984, edition: 2000},
];

let userBooks = books.filter( (bk) => bk.genre === 'History');

userBooks = books.filter( (bk) => {
    return bk.publish >= 1980 && bk.genre === "History"
});
console.log(userBooks);


