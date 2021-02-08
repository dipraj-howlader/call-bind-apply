const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    chargeBill: function (amount) {
        console.log(this)
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);
// console.log(normalPerson.getFullName());


const heroPerson = {
    firstName: 'Hero',
    lastName: ' Balam',
    salary: 25000,
}

const friendlyPerson = {

    firstName: 'Hero',
    lastName: 'Kalam',
    salary: 20000,

}

const friendBill = normalPerson.chargeBill.bind(friendlyPerson);
friendBill(2000);
friendBill(2000);
console.log(friendlyPerson.salary);

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
console.log(normalPerson.salary);