let p = { fname : 'Larry', company: "Google" }

let { fname, company, age = 30 } = p

console.log(fname, company, age)

let { fname: n, company: c } = p
console.log(n, c)




