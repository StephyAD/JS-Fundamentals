// no argument = "No argument"
//only one = print "Argument found"
//Otherwise = "Arguments found"

let aVar = process.argv.length - 2
if(aVar == 0){
    console.log("No argument")
} else if (aVar == 1){
    console.log("Argument found")
} else {
    console.log("Arguments found")
}
