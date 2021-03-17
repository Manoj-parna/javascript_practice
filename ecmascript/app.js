//object Literals
function objectLiterals(title, author) {
    return {
        title,
        author
    }
}
console.log(objectLiterals("harry potter", "j.k rowling"));
//output { title: 'harry potter', author: 'j.k rowling' }

//Object Deconstruction
const list = {
    name: "shopping list",
    items: ["green tea", "maggi"]
};
const { name, items } = list;
console.log(name, list);
//output manoj { name: 'manoj', items: [ 'green tea', 'maggi' ] }

//arrow funtion
const location = () =>{
    console.log("my location is banglore")
};
location();
const sayLocation = (location) =>{
console.log(`my location is ${location}`);
};
sayLocation("tirupati");
//
const user = {
    name:"manoj",
    age: 25,
    sayName:  function(){
        console.log(`my name is ${this.name}`)
        const fullName = ()=>{
            console.log(`my name is ${this.name} and my age is ${this.age}`)
        };
        fullName();
    }
};
user.sayName();
//by using arrow function 'this' refer to user by that we can still get user objects
const add = (x=1,y=1)=>{
    console.log(x+y);
}
add();//output 2
//we can give default values to parameters

