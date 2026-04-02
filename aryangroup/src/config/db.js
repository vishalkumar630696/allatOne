// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Vishal@630696",
//   database: "centraldb"
// });

// db.connect((err) => {
//   if (err) {
//     console.log("DB Error:", err);
//   } else {
//     console.log("MySQL Connected ✅");
//   }
// });


// module.exports = db;

const mongoose = require("mongoose")

const  connectDB = async () => {
  try{
    await mongoose.connect("mongodb://localhost:27017/centrallab")
    console.log("MongoDB Connected");
  } catch {
    console.log(error);
  }
}

module.exports = connectDB;
