DROP SCHEMA IF EXISTS sys_login;
CREATE SCHEMA IF NOT EXISTS sys_login;
USE sys_login;

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  user_id INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL
);

INSERT INTO users (full_name, email, password) VALUES 
	('Roberto Pimenta', 'roberto.uft@gmail.com', '123456')
;