const bcrypt = require("bcrypt");
const pool = require("../config/db");
const jwt = require("jsonwebtoken");

exports.loginUser = async (username, password) => {
    const [rows] = await pool.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );

    if (rows.length === 0) {
        throw new Error("User not found");
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
        throw new Error("Invalid password");
    }

    // 👉 Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // delete old OTPs before insert
    await pool.query(
        "DELETE FROM otp_verifications WHERE user_id = ?",
        [user.id]
    );

    // 👉 Save OTP in DB (5 min expiry)
    await pool.query(
        `INSERT INTO otp_verifications (user_id, otp_code, expires_at)
     VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 5 MINUTE))`,
        [user.id, otp]
    );

    // 👉 PRINT OTP (instead of email)
    console.log(`🔥 OTP for user ${user.username}: ${otp}`);

    return {
        message: `🔥 OTP for user ${user.username}: ${otp}`,
        userId: user.id,
        username: user.username
    };

};

exports.registerUser = async (data) => {
    const { username, full_name, email, phone, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!username || !email || !password) {
        throw new Error("Missing required fields");
    }

    const [result] = await pool.query(
        `INSERT INTO users 
    (username, full_name, email, phone, password_hash) 
    VALUES (?, ?, ?, ?, ?)`,
        [username, full_name, email, phone, hashedPassword]
    );

    return result.insertId;
};

exports.verifyOtp = async (userId, otp) => {
  const [rows] = await pool.query(
    `SELECT * FROM otp_verifications
     WHERE user_id = ? AND otp_code = ?
     AND is_used = FALSE
     AND expires_at > NOW()`,
    [userId, otp]
  );

  if (rows.length === 0) {
    throw new Error("Invalid or expired OTP");
  }

  // mark OTP used
  await pool.query(
    "UPDATE otp_verifications SET is_used = TRUE WHERE id = ?",
    [rows[0].id]
  );

  // 👉 Generate JWT
  const token = jwt.sign(
    { userId: userId },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};