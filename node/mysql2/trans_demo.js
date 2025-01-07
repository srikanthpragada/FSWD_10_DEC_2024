var mysql2 = require('mysql2/promise');
var { connectionDetails } = require("./util")

async function updateSalaries(id1, id2) {
  var con = await mysql2.createConnection(connectionDetails);
  console.log("Connected!")
  try {
    // begin transaction
    await con.beginTransaction()
    // changes 
    let [result] = await con.execute("update employees set salary = 500000 where emp_id = ?", [id1])
    if (result.affectedRows !== 1)
      throw new Error(`Id ${id1} not found`)
    else
      console.log("Updated first employee")

    let [result2] = await con.execute("update employees set salary = 500000 where emp_id = ?", [id2])
    if (result2.affectedRows !== 1)
      throw new Error(`Id ${id2} not found`)
    
    await con.commit()
    console.log("Committed!")
  }
  catch (error) {
    await con.rollback()
    console.log("Rolledback! Error : " + error.message)
  }
  await con.end()

}


updateSalaries(3, 12)

