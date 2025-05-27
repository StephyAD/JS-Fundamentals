// no argument = "No arguments"
//only one = print "Argument found"
//Otherwise = "Arguments found"

let aVar = process.argv.length -2
if(aVar == 0){
    console.log("No arguments")
} else if (aVar ==1){
    console.log("Argument found")
} else {
    console.log("Arguments found")
}
