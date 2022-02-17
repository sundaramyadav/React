function Employee() {
    var Empid=123;
    var name= "Sundaram";
    var age = 30;
    var designation = " Software Developer";
    var salary = 10000;
    var dob="12/12/2020";
    var doj="01/03/2022";
    var creditscore=90;
    
    var getName = function(Empid) {
      if(Empid==123)
      {
          console.log("Employee Name is:"+name);
      }
        else
      {
          console.log("This Empid doesn't exist");
      }
    }
   var getAge = function(Empid) {
      if(Empid==123)
      {
          console.log("Employee age is:"+age);
      }
        else
      {
          console.log("This Empid doesn't exist");
      }
    }
  var getDesignation = function(Empid) {
      if(Empid==123)
      {
          console.log("Employee Designation is:"+designation);
      }
        else
      {
          console.log("This Empid doesn't exist");
      }
    }

    var getSalary = function(Empid) {
      if(Empid==123)
      {
          console.log("Employee salary is: "+salary);
      }
        else
      {
          console.log("This Empid doesn't exist");
      }
    }

    var getDob = function(Empid) {
      if(Empid==123)
      {
          console.log("Employee Date Of Birt is:"+dob);
      }
        else
      {
          console.log("This Empid doesn't exist");
      }
    }
    var getDoj = function(Empid) {
      if(Empid==123)
      {
          console.log("Employee Date Of Joining is:"+doj);
      }
        else
      {
          console.log("This Empid doesn't exist");
      }
    }
    var getBonus = function(Empid) {
      if(Empid==123)
      {console.log("The creditscore is:" +creditscore+ " and Your final salary after Bonus is: ")
          if(creditscore>=75)
              console.log(salary+salary*0.75)
          else if(creditscore>=50)
              console.log(salary+salary*0.50);
          else if(creditscore>=25)
              console.log(salary+salary*0.25);
          else
              console.log(salary);
      }
        else
      {
          console.log("This Empid doesn't exist");
      }
    }
    return {
      Empid:Empid,
      name: name,
      age: age,
      designation:designation,
      
        dob:dob,
        doj:doj,
        getName: getName,
        getAge:getAge,
        getSalary:getSalary,
        getDesignation:getDesignation,
        getDob:getDob,
        getDoj:getDoj,
        getBonus:getBonus
    }
  }
  
  var E1 = Employee();
  var E2 = Employee();
  var Name = E2.getName(123);
  var age=E2.getAge(123);
var Designation=E1.getDesignation(123);
var Sal=E1.getSalary(123);
var Dob=E1.getDob(123);
var Doj=E1.getDoj(123);
var Bonus=E1.getBonus(123);
