const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "project",
});

app.get("/house", (req, res) => {
    db.query("SELECT * FROM house", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});
app.get("/house/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM house WHERE id =?",id,
   (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/create", (req, res) => {
    const owner = req.body.owner;
    const housenumber = req.body.housenumber;
    const email = req.body.email ;
    const phone = req.body.phone;
    const status = req.body.status;
  
    db.query(
      "INSERT INTO house (housenumber,owner,email , phone, status) VALUES (?,?,?,?,?)",
      [housenumber,owner,email , phone, status],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const owner = req.body.owner;
    const housenumber = req.body.housenumber;
    const email = req.body.email ;
    const phone = req.body.phone;
    const status = req.body.status;
    db.query(
      "UPDATE `house` SET `housenumber` = ?, `owner` = ?, `email` = ?, `phone` = ?, `status` = ? WHERE `house`.`id` = ?;",
      [housenumber,owner,email,phone,status,id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM house WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});