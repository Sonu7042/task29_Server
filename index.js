const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const status= require('express-status-monitor')






const app = express();
app.use(cors());

app.use(status())

app.get("/", (req, res) => {
  res.send("working fine server");
});



app.get("/video1", (req, res) => {
  const video1Path = path.join(__dirname, "./Public", "video1.mp4");
  const video1Stream = fs.createReadStream(video1Path);
  res.writeHead(200, { "Content-Type": "video/mp4"});
  video1Stream.pipe(res);
});




app.get("/video2", (req, res) => {
  const video1Path = path.join(__dirname, "./Public", "movie.mp4");
  const video1Stream = fs.createReadStream(video1Path);
  res.writeHead(200, { "Content-Type": "video/mp4" });
  video1Stream.pipe(res);
});






app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
