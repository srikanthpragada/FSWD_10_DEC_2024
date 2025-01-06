var mysql2 = require('mysql2/promise');
var { connectionDetails } = require("./util")

async function add_dept() {
  try {
    let con = await mysql2.createConnection(connectionDetails)
    try {
      const [result, fields] = await con.execute
        ("insert into departments values(?,?)",
          ['d1', 'Department 1'])
      console.log(result)
    }
    catch (error) {
      console.log('Insertion Error :' + error.message)
    }
    await con.end()
  }
  catch (ex) {
    console.log("Connection Error : " + error.message)
  }
}

add_dept()