//no arguments = "No argument"
let myVar = process.argv[2]
if (myVar == null){
    console.log("No argument");
} else {
    console.log(myVar);
}