import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) =>
  res.send(" <h1>Welcome to the login route</h1>")
);

app.get("/test", (req, res) => res.send("Learn Backend"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
