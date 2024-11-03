const express = require("express");
const path = require("path");
const hostRouter = require("./Routers/hostRouter");
const rootDir = require("./util/path");

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "public", "views", "404_page.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
