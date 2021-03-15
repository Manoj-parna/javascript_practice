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
let topFiveFlims = {
    movie_no1: {
        movie_name: "The Shawshank Redemption",
        imdb_rating: "9.3",
        year_released: "1994",
        director: "Frank Darabont"
    },
    movie_no2: {
        movie_name: "The Godfather ",
        imdb_rating: "9.2",
        year_released: "1972",
        director: "Francis Ford Coppola"
    },
    movie_no3: {
        movie_name: "The Godfather: Part II ",
        imdb_rating: "9",
        year_released: "1974",
        director: "Francis Ford Coppola"
    },
    movie_no4: {
        movie_name: "The Dark Knight  ",
        imdb_rating: "9",
        year_released: "2008",
        director: "Francis Ford Coppola"
    },
    movie_no5: {
        movie_name: "12 Angry Men",
        imdb_rating: "9",
        year_released: "1957",
        director: "Francis Ford Coppola"
    },

};
arraysOfCompanies.push({ companyName: "telsa,spacex", ceo: "elon musk", rank: "", net_worth: "200 billion" });
console.log(arraysOfCompanies);
//
arraysOfCompanies.pop();
console.log("pop", arraysOfCompanies);
//
arraysOfCompanies.push({ companyName: "telsa,spacex", ceo: "elon musk", rank: "", net_worth: "200 billion" });
console.log("push", arraysOfCompanies);
//
JSON.stringify(arraysOfCompanies.toString());
console.log("stringify", arraysOfCompanies);
//
let mapR = arraysOfCompanies.map((company) => {
    if (company.ceo === "elon musk") {
        return "elon musk found";
    }
    else {
        return "not found";
    }
});
console.log("map", mapR);
//map ['not found','not found', 'not found','not found','elon musk found'  ]//

let flitterR = arraysOfCompanies.filter((company) => {
    if (company.rank <= 2) {
        return company.rank
    }
});
console.log(flitterR);
//
let mapResult = arraysOfCompanies.map((company) => {
    if (company.ceo === "elon musk") {
        return company.ceo;
    }
});
console.log(mapResult);
//output [ undefined, undefined, undefined, undefined, 'elon musk' ]//
let emptyArray = [];
let combine = emptyArray.concat(topFiveFlims);
console.log("combine", combine);
//sucess
let a = "1, 4, 6, 7, 88, 8, a, l, ss, aa";
console.log(a.split(","));
var bnumber = a.split().map((item) => {
    return parseInt(item);
});
console.log("mapresult", bnumber);