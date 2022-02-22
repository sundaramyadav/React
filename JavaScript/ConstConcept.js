let a = 10;

const name = "Sundaram";

console.log(name);

debugger;

const employeeDetails = {
    userName: "Sandy",
    userAge: 30
}

employeeDetails.userName = "Anshul";
employeeDetails.userSalary = "10";

//Assignment to const var is not asllowed. The reference(address) of employeeDetails is const so that can't be changed once defined as const
// employeeDetails = {
//     userName: "Mayank",
//     userAge: 30
// }

console.log(employeeDetails.userName);

const myArray = [10, 20, 30];
myArray.push(40);

// Error, Anshul, Mayank

