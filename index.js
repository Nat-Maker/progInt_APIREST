import express from "express";
import fs from "fs";

const app = express();

const readData = () => {
    try {
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
    } catch (error) {
    console.log(error);
    }
};

const writeData = (data) => {
    try {
    fs.writeFileSync("./db.json", JSON.stringify(data));
    } catch (error) {
    console.log(error);
    }
};

app.get("/", (req, res) => {
  res.send("Si sirve!");
});

app.get("/books", (req, res) => {
    const data = readData();
    res.json(data.books);
});

app.get("/prueba", (req, res) => {
  res.send("Esta es la versión nueva");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});