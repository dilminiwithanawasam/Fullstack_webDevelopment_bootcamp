import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import pg from "pg";

const app = express();
const port = 3000;
const Pool = pg.Pool;
const db= new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "udemy_database",
  password: "dW2001@C",
  port: 5432,
});

db.connect();

app.set("view engine", "ejs");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");

});

app.post("/register", async (req, res) => {
   console.log("Full body:", req.body);
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
    console.log(result);
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    if (result.rows.length > 0) {
      res.send("Login Successful");
    } else {
      res.send("Invalid Credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
