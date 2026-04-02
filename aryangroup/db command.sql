use centraldb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    password_hash VARCHAR(255) NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name ENUM('admin', 'user') UNIQUE NOT NULL
);

CREATE TABLE user_roles (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE otp_verifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    otp_code VARCHAR(10),
    expires_at DATETIME,
    is_used BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);





/////////////////////////////////////////////////////////////

CREATE TABLE test (
  id INT AUTO_INCREMENT PRIMARY KEY,
  testid VARCHAR(50),
  testname VARCHAR(100),
  labcode VARCHAR(50),
  method VARCHAR(50),
  unit VARCHAR(50)
);