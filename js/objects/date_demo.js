
let d1 = new Date("2024-01-01")
console.log(d1.toString())

let d2 = new Date(2023, 0, 1) // year, month, day
console.log(d2.toString()) 

let cd = new Date(); // system date 
cd.setDate(cd.getDate() + 40)
console.log(cd.toString()) 

let sd = new Date()
console.log(sd.toString())
console.log(sd.toLocaleDateString("en-US"))
console.log(sd.toLocaleDateString("es-ES"))

console.log(sd.getTime())

