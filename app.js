const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  console.log(req.url, req.method, "First midleware");
  next();
});

app.get("/contact-us", (req, res, next) => {
  console.log(req.url, req.method, "Second middleware");
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/contact-us" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="amount">Amount</label>
      <input type="text" id="amount" name="amount" required />
      <input type="submit" />
    </form>
  </body>
</html>
`);
});

app.post("/contact-us", (req, res, next) => {
  console.log(req.url, req.method, req.body, "Second middleware");
  res.send("Successfully submitted data");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
