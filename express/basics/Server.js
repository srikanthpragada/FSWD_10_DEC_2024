const express = require('express') // use express library

const app = express()
const port = 3000

app.get('/',
    (req, res) => {
        res.send('<h1 style="color:green">Hello World!</h1>')
    }
)

app.get('/about',
    (req, res) => {
        res.send('<h1>This is Express JS!</h1>')
    }
)

app.listen(port,
    () => {
        console.log(`Server listening on port ${port}`)
    })