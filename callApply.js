const normalPerson = { 
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName: function(){
      fullName =  this.firstName + " " + this.lastName;
      return fullName;
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);
console.log(normalPerson.getFullName());