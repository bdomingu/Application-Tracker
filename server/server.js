const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

const app = express()



app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nazael43$",
    database: "login_system",
    // port: 3000,

});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB connected!")
  }
})


app.post("/register", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log("SERVER POST WORKS")
      

    db.query(
    "INSERT INTO user (name, email, password) VALUES (?,?,?)", 
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    
    }
    
 );
});

app.listen(3001, () => {
    console.log("Server started in port 3001")
})