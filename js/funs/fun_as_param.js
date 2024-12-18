
function print() {
    console.log("Hello!")
}

function wish(name){
    console.log("Hi " + name)
}

function doSomething(func, value) {
    func(value)
}

doSomething(print)
doSomething(wish, "Bill")