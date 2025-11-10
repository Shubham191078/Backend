const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://your-frontend-url.vercel.app"],
    methods: ["POST"],
  })
);

// Hardcoded credentials
const USER = { username: "yash88", password: "yash" };

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    return res.json({ message: "Login successful ✅" });
  } else {
    return res.status(401).json({ error: "Invalid credentials ❌" });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
