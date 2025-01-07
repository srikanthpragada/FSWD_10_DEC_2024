const http = require('http');   // import library 

const server = http.createServer(
     (req, res) => {
          res.statusCode = 200;  // OK
          res.setHeader('Content-Type', 'text/html');
          let response = `<h1>Hello World!</h1><h2>Today is : ${new Date()}</h2>`
          res.end(response);
     }
);

server.listen(8888, 'localhost',
     () => { console.log('Server running...'); }
);