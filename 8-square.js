
let F = parseInt (process.argv[2])
if (isNaN(F)){
console.log("Missing size")
} else{
    for (let i = 0 ; i < F ; i++){
        console.log("X". repeat(F))
    }
}