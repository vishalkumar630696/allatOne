const db = require("../config/db"); 

// Read
 function readData(req, res)  {
   db.query("SELECT * FROM test", (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
}
// Create
 function CreateData(req, res)  {
  const { testid, testname, labcode, method, unit } = req.body;
  if (!testid || !testname || !labcode || !method || !unit) {
    return res.status(400).send({ message: "All fields required " });
  }
  const sql =
    "INSERT INTO test (testid, testname, labcode, method, unit) VALUES (?, ?, ?, ?, ?)";
   db.query(sql, [testid, testname, labcode, method, unit], (err, result) => {
    if (err) return res.send(err);
    res.send({ message: "Inserted " });
  });
}

//update
 function UpdateData (req, res) {
  const { id } = req.params;
  const { testid, testname, labcode, method, unit } = req.body;
  const sql =
    "UPDATE test SET testid=?, testname=?, labcode=?, method=?, unit=? WHERE id=?";
   db.query(sql, [testid, testname, labcode, method, unit, id], (err, result) => {
    if (err) return res.send(err);
    res.send({ message: "Data Updated " });
  });
}
// delete
 function DeleteData (req, res) {
  const { id } = req.params;
   db.query("DELETE FROM test WHERE id=?", [id], (err, result) => {
    if (err) return res.send(err);
    res.send({ message: "Deleted " });
  });
}

//Read Single
 function SingleData  (req, res) {
  const { id } = req.params;
   db.query("SELECT * FROM test WHERE id=?", [id], (err, result) => {
    if (err) return res.send(err);
    res.send(result[0]);
  });
}

module.exports={
    CreateData:CreateData,
    readData:readData,
    UpdateData:UpdateData,
    DeleteData:DeleteData,
    SingleData:SingleData
}