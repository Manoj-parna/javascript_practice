let promiseToPerson = new Promise(function(resolve,reject){
    let personAge = 27;
    if(personAge === 27){
        resolve(27);
    }
    else{
        reject("false");
    }
});
promiseToPerson.then(function(fromResolve){
    console.log('the person age is '+fromResolve)
});
//
let personName = new Promise(function(resolve,reject){
    let personName = "manoj";
    if(personName === "manoj"){
        resolve("manoj")
    }
    else{
        reject("didn't find name ")
    }
});
let personLastName = new Promise(function(resolve,reject){
    let personLastName = "parna";
    if(personLastName === "parna"){
        resolve("parna")
    }
});
let personHobbies = new Promise(function(resolve,reject){
    let hobbies = "nothing";
    if(hobbies === "movies"){
        resolve("movies");
    }
    else{
        reject("error")
    }
});
let personDetails = personName.then(function(fromResolve){
    console.log(`first name:${fromResolve}`);
});
personLastName.then(function(fromResolve){
    console.log(`last name:${fromResolve}`);
});
promiseToPerson.then(function (fromResolve) {
    console.log(`age:${fromResolve}`)
})
personHobbies.then(function(fromResolve){
    console.log(`hobbies:${fromResolve}`);
}).catch(function(fromReject){
    console.log(`hobbies:${fromReject}`)
});
console.log(personDetails);
// 