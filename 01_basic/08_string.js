const name = "pradip"
const repoCount = 10

console.log(name + repoCount + " Value" + " Add");  // old version

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // new version


const gameName = new String('SunRaku-Pro')  // => S=0,u=1,n=2,R=3,a=4,k=5,u=6

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);

const newStringOne = "   pradip   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pradip.com/prdaip%20iuywhj"

console.log(url.replace('%20','-'));

console.log(url.includes('prdaip'));
console.log(url.includes('sunraku'));

const styleName = new String('Prdaip-sunraku-suman-ayan-atanu');
console.log(styleName.split('-'));     // String to convert Array



