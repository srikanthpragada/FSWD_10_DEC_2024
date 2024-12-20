
let a = 10
let b = 0

try {
    let cd = new Date()
    console.log(cd.getMonths())  // Exception
}
catch (e) {
    console.log("Error :" + e)
}
finally {
   console.log("Finally")   
}

console.log(a / b)
console.log("The End")

//throw "Error"