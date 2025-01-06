var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')


async function list() {
  try {
    const con = await mysql2.createConnection(connectionDetails);
    const [depts, fields] = await con.execute('SELECT * FROM departments order by dept_name');
    console.log(depts)
    for (let dept of depts) {
       console.log(dept.dept_name)
    }
    await con.end();
  }
  catch (ex) {
    console.log(ex)
  }
}


list()


    
 