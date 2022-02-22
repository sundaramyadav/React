debugger;
function Employee(name, age, designation, salary) {
    var userName = name;
    var userAge = age;
    var userDesignation = designation;
    var userSalary = salary;

    function getBonus() {
        console.log("hello");
        return userSalary*2;
    }

    return {
        empName: userName,
        empAge: userAge,
        empDesignation: userDesignation,
        empBonus: getBonus
    }
}

var employeeOne = Employee("Mayank", 19, "Developer", 12);
var bonus = employeeOne.empBonus();
console.log(bonus);

