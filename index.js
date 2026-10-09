import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const readData = () => {
  try {
    return JSON.parse(fs.readFileSync("./db.json"));
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error);
  }
};

app.get("/books", (req, res) => {
  const data = readData();
  res.json(data.books);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});