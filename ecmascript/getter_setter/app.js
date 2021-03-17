let person = {
    firstname: "manoj",
    lastname: "parna",
    get fullName() {
        return `${person.firstname}${person.lastname}`
    },
    set fullName(value) {
        const parts = value.split(" ")
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
};
console.log(person);
let list = {
    items: ["milk", "green tea"],
    nrOfItems: 2,
    get fullList() {
        return `${items}${this.nrOfItems}`
    },
    set fullList(value) {
        const parts = value.split(" ")
        this.items = parts[0]; 
        this.nrOfItems = parts[1];
    }
};
console.log(list);