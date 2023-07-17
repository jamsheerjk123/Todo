const express = require('express')
const app = express()
const cors = require('cors');
const mysql = require('mysql')
const port = 5000
app.use(cors())
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'koniyath_fisheries',
    port:'3307'
  })
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.get('/', (req, res) => {
    const sql ="SELECT * FROM study"
  db.query(sql,(err,data)=>{
    console.log(data)
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})