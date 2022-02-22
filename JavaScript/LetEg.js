// let has Scope is only in that block
//var has scope in function
// block is anything with in curly braces
function getData() {
    let name = "Mayank";
    console.log("Mayank")

    for(let i = 0; i< 10; i++ ) {
        console.log(i)
    }

    if(name == "Mayank") {
        let age = 30;
        console.log(age);
    }

// both i and age are undefined here becoz above they are defined only in particular block
//if we would have declared i and age to var then both value will get printed.
    // console.log(i);
    // console.log(age);

    debugger;
}


getData()