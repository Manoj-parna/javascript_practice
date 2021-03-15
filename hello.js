let a = "12349abcdefgh5678ijklABCDEFGHIJKLEMONPmnop";
let b = 0, c = [], d = [];
console.log(a.split("").sort().join());

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
    console.log(typeof parseInt(a[i]))
    if (typeof parseInt(a[i]) === 'number') {
        c?.push(a[i]);
    } else {
        d?.push(a[i])
    }
}
console.log(c.toString());
console.log("hello")
console.log(d.toString());
//
function extract() {
    let a = "12349abcdefgh5678ijklABCDEFGHIJKLEMONPmnop";
    let matches = a.match(/\d+/);

    if (matches) {
        return matches[i];
    }
};
console.log("ex", extract());