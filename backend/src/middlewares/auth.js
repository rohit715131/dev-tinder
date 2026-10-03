const adminAuth = (req, res, next) => {
  const token = "admin"; // Replace with your actual token validation logic
  const authorization = token === "admin";
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
const userAuth = (req, res, next) => {
  const token = "user"; // Replace with your actual token validation logic
  const authorization = token === "user";

  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
module.exports = { adminAuth, userAuth };
