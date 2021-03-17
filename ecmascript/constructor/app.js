//constructor 
// by using constructor we can create objects
//by using class we write constructor
class shoppingList {
    constructor(items, nr) {
        this.items = items;
        this.nr = nr;
    }
    sayList() {
        console.log(this.items)
    }
};
let myList = new shoppingList(["milk", "green tea"], 2);
myList.sayList();

class person {
    constructor(name, lastName, age, location) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    personName() {
        console.log(this.name, this.lastName, this.age, this.location);
    }
};
let personDetails = new person("manoj", "parna", 27, "banglore");
personDetails.personName();
//
class favoriteMovie {
    constructor(movieName, releasedYear) {
        this.movieName = movieName;
        this.releasedYear = releasedYear;
    }
    // movieDetails() {
    //     console.log(this.movieName, this.releasedYear, this.rating);
    // }
}
class movieDetails extends favoriteMovie{
    constructor(movieName,releasedYear,rating){
        super(movieName,releasedYear)
        this.rating = rating
    }
}
let movie = new movieDetails("gifted",2017,`"imbd rating" 7.6`);
console.log(movie);
//
