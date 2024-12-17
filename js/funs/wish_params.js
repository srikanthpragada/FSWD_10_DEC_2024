// arguments - name, message
function wish(name, message) {
    if (!message)  // message is undefined
        message = "Hi"

    console.log(`${message} ${name}`)
}

wish('Scott', 'Hello')
wish('Jack', "Hi")
wish('Jason')


