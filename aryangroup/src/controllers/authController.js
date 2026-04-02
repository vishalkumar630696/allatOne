const authService = require("../services/authService");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await authService.loginUser(username, password);

    res.json({
      message: "Login successful",
      user
    });

  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};

exports.register = async (req, res) => {
  try {
    const userId = await authService.registerUser(req.body);

    res.json({
      message: "User registered successfully",
      userId
    });

  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { userId, otp } = req.body;

    const token = await authService.verifyOtp(userId, otp);

    // 👉 Set Cookie
    res.cookie("token", token, {
      httpOnly: true,     // JS cannot access (secure)
      secure: false,      // true in production (HTTPS)
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.json({
      message: "Login successful"
    });

  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};

