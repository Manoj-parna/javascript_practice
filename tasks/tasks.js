//to reverse a string
let stateName = "andhra pradesh";
let resultA = stateName.split("");
let resultB = resultA.reverse().join();
console.log("output", resultB);
//to split a string
let Name = "pawan kalyan";
let result = Name.split("");
console.log(result);
//to count no of characters in a string
let someSentence = "Mary and Samantha arrived at the bus station early but waited until noon for the bus"
function characterCount(word, character) {
    let count = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] == character) {
            count++;
        }
    }
    return count;
}
console.log(characterCount(someSentence, "a"))
//method 2
let obj={};
let str="Manoj Parna";
str=str.split(" ").join("");
console.log(str.length)
for(let i=0;i<str.length;i++){
    obj.hasOwnProperty(str.charAt(i))?obj[str.charAt(i)]++:obj[str.charAt(i)]=1
}
console.log(obj);
//to convert string into a number
let a = "5";
let b = 10;
let sumOfab = Number(a) + b;
console.log(sumOfab);
console.log("sum of a+b", sumOfab);
//method two
let strN = "5";
let someNumber = 10;
let strToNumber = parseInt(strN) + someNumber ;
console.log("sum of two number",strToNumber)
//
let date = "11-02-21";
let dateResult = date.split("-").reverse().join("-");
console.log("--------------------")
console.log("date split",date.split("-")) 
//if we give - then it will split  according to it,if we give space it will split according to it
console.log("----------------")
console.log("date split+reverse+join",date.split("-").reverse().join("-"))
console.log(dateResult);
console.log("-------------------")
let fr = date.split("-").reverse();
console.log(fr);
console.log(`${fr[2]}-${fr[1]}-${fr[0]}`);
//
let flims = ["croods","frozen","e.t","mad max"];
let flimsAndBoxoffice = [
    {
        movieName: "croods",
        boxOffice: "hit",
        collection: 140
    },
    {
        movieName: "frozen",
        boxOffice: "hit",
        collection: 120
    },
    {
        movieName: "e.t",
        boxOffice: "hit",
        collection: 140
    },
    {
        movieName: "mad max",
        boxOffice: "hit",
        collection: 120
    }

]
console.log(flims);
flims.forEach(element => {
    console.log(element);
});

flimsAndBoxoffice.forEach(element1 => {
  console.log(element1);
});
//
let arraysOfCompanies = [
    {
        companyName: "JPMorgan Chase",
        ceo: "Jamie Dimon",
        rank: 1,
        net_worth: "3 trillion"
    },
    {
        companyName: "Microsoft",
        ceo: "Satya Nadella",
        rank: 2,
        net_worth: "250 million"
    },
    {
        companyName: "apple",
        ceo: "Tim Cook",
        rank: 3,
        net_worth: "1 billion"
    },
    {
        companyName: "Walt Disney Company",
        ceo: "Bob Chapek",
        rank: 4,
        net_worth: "690 million"
    }
];
//foreach
arraysOfCompanies.forEach(company => {
    console.log("for each",company);    
});
//map
let companies = arraysOfCompanies.map((company => {
    if(company.rank === 1|| company.rank === 2){
        return "success";
    }
    else{
        return "not in rank 1 or 2"
    }
}));
console.log("map",companies);
//fliter
const companiesAB = arraysOfCompanies.filter((company) => {
   return company.rank<=2
   
});

console.log("filter",companiesAB);
//
let companiesB = arraysOfCompanies.map((company => {
    if(company.net_worth < "690 million"){
        return "true";
    }
}));
console.log("map",companiesB);

// Question: How will you remove duplicates from a JS array?
// Question: Copy array elements to other array
// Question: How can you check if something is an Array?
// Question: Add an item to the end of an array?
// Question: Find the index position of d in this array var arr= ['a','b','c','d']?
// Question: What will be returned if you look for the index of something that does not exist?
// Question: Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar']?
// Question: Now you've found milk exists add some code to find the index of milk and remove that item?
// Question: Write some code to put these numbers in order var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
// Question: With below array use map function to return all the species;

// Question: How will you empty an array in JavaScript?
let items = ["milk","sugar","coffee","bread","sugar","coffee","milk","sugar"];
function emptyA(){
    items.length = 0;
}
let empty = items.length = 0;
console.log("empty",empty);
console.log(emptyA());
//
let D = items.indexOf("coffee",1);
console.log("d",D);
let chars = ['A', 'B', 'A', 'C', 'B'];
let y = chars.indexOf("b",0);
console.log("y",y);

// chars.forEach((c, index) => {
//     console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
// });
 
let fliter = chars.filter((c,index)=>{
    return chars.indexOf(c) == index;
});
console.log(fliter);
let f = items.filter((i,index)=>{
    return items.indexOf(i) == index;
});
 items.forEach((i,index)=>{
    console.log(`${i}-${index} -${items.indexOf[i]} `)
});
let fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];
let ff = items.indexOf("milk",1);
console.log("ff",ff);
//// Question: How can you check if something is an Array?
let search = fruits.includes("Apple");
console.log("search",search)
//// Question: Add an item to the end of an array?
fruits.push("lemon");
console.log("push",fruits)
//// Question: Find the index position of d in this array var arr= ['a','b','c','d']?
let arr= ['a','b','c','d'];
let indexOfd = arr.indexOf("d");
console.log(indexOfd);
//// Question: Add an item to the end of an array?
arr.push("e");
console.log(arr);
//// Question: Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar']
let itemsA = ['milk', 'bread', 'sugar'];
function checkMilk(){
    for(let i = 0; i<itemsA.length;i++){
        if(itemsA[i] === "milk"){
            return "found";
        }
        else    {
            return "notfound";
        }
    }
};
console.log(checkMilk());
// Question: Now you've found milk exists add some code to find the index of milk and remove that item?
let milk = itemsA.indexOf("milk");
console.log(milk);
itemsA.shift();
console.log("remove",itemsA)
//
let milkA = itemsA.slice(0,1);
// Question: Write some code to put these numbers in order var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
let numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
console.log(`${numbers[0]},${numbers[2]},${numbers[5]},${numbers[1]},${numbers[3]},${numbers[6]},${numbers[4]},${numbers[8]},${numbers[9]}`);
 