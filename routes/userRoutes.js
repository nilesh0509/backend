const express = require("express");
const { registerController, loginController } = require("../controllers/authController");
const router = express.Router();
const User = require("./../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Secret Key for JWT
const JWT_SECRET = process.env.JWT_SECRET || KaushikiNilesh

/* ==============================
     1️⃣ REGISTER (SIGN UP)
============================== */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ token, user: { id: user._id, username: user.name } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

/* ==============================
     2️⃣ LOGIN (SIGN IN)
============================== */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.json({ token, user: { id: user._id, username: user.name } });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

/* ==============================
     3️⃣ AUTHENTICATED USER INFO
============================== */
// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

// Get logged-in user data
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("name email");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});




// router.post("/register", registerController);
// router.post("/login", loginController, async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // Generate token
//     const token = jwt.sign({ userId: user._id }, "JWT_SECRET", { expiresIn: "1d" });

//     res.json({ token, user: { id: user._id, name: user.name } });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });




// Get user by ID
// router.get("/user/:id", async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id).select("name");
//       if (!user) return res.status(404).json({ message: "User not found" });
  
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   });

module.exports = router;
