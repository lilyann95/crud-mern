import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]; //returns Bearer TOKEN
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "You don't have access" });
    }

    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = user; //{id, userName}
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export { authenticateToken };
