const express = require("express");
const app = express();
const port = 3000;
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth, (req, res, next) => {
  res.send("admin handle 1");
  // next();
});
app.use("/user/login", (req, res, next) => {
  res.send("Login handle");
  // next();
});
app.use("/user", userAuth, (req, res, next) => {
  try {
    res.send("user handle 1");
  } catch (error) {
    res.status(500).send("Internal Server Error from user side");
  }
  // next();
});
app.use("/userdetails", (req, res, next) => {
  throw new Error("Something went wrong");
  // next();
});
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
