let companies = [
    {
        companyName: "JPMorgan Chase",
        ceo: "Jamie Dimon",
        rank: 1,
        net_worth: 300000
    },
    {
        companyName: "Microsoft",
        ceo: "Satya Nadella",
        rank: 2,
        net_worth: 400000
    },
    {
        companyName: "apple",
        ceo: "Tim Cook",
        rank: 3,
        net_worth: 350000
    },
    {
        companyName: "Walt Disney Company",
        ceo: "Bob Chapek",
        rank: 4,
        net_worth: 450000
    },
];
let netWorthAndceo = companies.map((company) => {
    return company.ceo + "  " + ":their netwoth" + " " + company.net_worth;
});
console.log(netWorthAndceo);
//
let netWorth = companies.map((company) => {
    return company.net_worth;
})
console.log(netWorth);
//
let a = [1,2,3,4,4,55];
let total = 0;
 a.forEach((element)=>{
    total = total + element;
});
//
console.log(total);