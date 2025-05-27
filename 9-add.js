function add(a, b){
    return a + b 
}
let myVar =parseInt(process.argv[2]) 
let F = parseInt(process.argv[3] )
if(isNaN(myVar)||isNaN(F)){
    console.log(NaN)
} else {
    console.log(add(myVar,F))

}
