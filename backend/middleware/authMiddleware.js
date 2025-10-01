import jwt from "jsonwebtoken";
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]; //returns Bearer TOKEN
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "You don't have access" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!authToken)
      return res.status(401).json({ message: "You don't have access" });

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export { authenticateToken };
