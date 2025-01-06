var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function list_employees() {
  const con = await mysql2.createConnection(connectionDetails);
  const [rows, fields] = await con.execute('SELECT * FROM employees');
  console.log(rows)  // rows is an Array of JS object 
  await con.end();
}


list_employees()


    
 