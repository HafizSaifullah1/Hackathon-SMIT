const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    // Simulate saving user to database
    const userExists = false; // Replace with your database query
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    // Simulate successful user creation
    res.status(201).json({
      success: true,
      message: "User registered successfully!",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

module.exports = router;
