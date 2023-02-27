DROP DATABASE IF EXISTS employee_db;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
CREATE DATABASE employee_db;



-- Creates the table "department" within employee_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" --
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  title VARCHAR(30) NOT NULL
);


-- Creates the table "role" within employee_db --
CREATE TABLE roles (
  -- Creates a numeric column called "id" --
  id INT PRIMARY KEY AUTO_INCREMENT,
  -- Makes a string column called "title" which cannot contain null --
  title VARCHAR(30) NOT NULL,
   -- Makes a numeric column called "salary" which cannot contain null --
  salary DECIMAL NOT NULL,
   -- Makes a numeric column called "department_id" which cannot contain null --
  department_id INT
  FOREIGN KEY (department_id)
  REFERENCES    department(id)
  ON DELETE CASCADE
);


-- Creates the table "employee" within employee_db --
CREATE TABLE employee (
  -- Creates a numeric column called "id" --
  id INT AUTO_INCREMENT PRIMARY KEY,
  -- Makes a string column called "first_name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "last_name" which cannot contain null --
  last_name VARCHAR(30) NOT NULL,
  -- Makes a numeric column called "role_id" which cannot contain null --
  roles_id INT NOT NULL,
  -- CONSTRAINT fk_roles_id FOREIGN KEY(roles_id)
  -- REFERENCES roles(id)
  -- ON DELETE CASCADE,
  -- Makes a numeric column called "manager_id" --
  manager_id INT
  -- CONSTRAINT fk_manager_id FOREIGN KEY (manager_id)
  -- REFERENCES employee(id)
  -- ON DELETE CASCADE
);