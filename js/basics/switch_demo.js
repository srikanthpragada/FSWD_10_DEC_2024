
let d = new Date()
let day = d.getDay()
//console.log(day)

switch (day) {
    case 1: msg = "Beginning of the week"
        break;
    case 2:
    case 3:
    case 4: msg = "Mid of the week"
        break;
    case 5: msg = "Weekend is coming"
        break;
    default: msg = "Weekend";
}

console.log(msg)