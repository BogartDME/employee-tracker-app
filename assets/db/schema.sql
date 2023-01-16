-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the inventory_db database --
CREATE DATABASE employee_db;

-- use employee_db database --
USE employee_db;


- Creates the table "department" within employee_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" --
  id INT PRIMARY KEY NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);


- Creates the table "role" within employee_db --
CREATE TABLE roles (
  -- Creates a numeric column called "id" --
  id INT PRIMARY KEY NOT NULL,
  -- Makes a string column called "title" which cannot contain null --
  title VARCHAR(30) NOT NULL,
   -- Makes a numeric column called "salary" which cannot contain null --
  salary DECIMAL NOT NULL,
   -- Makes a numeric column called "department_id" which cannot contain null --
  FOREIGN KEY (department_id)
  REFERENCES    department(id)
  ON DELETE SET NULL
);


- Creates the table "employee" within employee_db --
CREATE TABLE employee (
  -- Creates a numeric column called "id" --
  id INT PRIMARY KEY NOT NULL,
  -- Makes a string column called "first_name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
   -- Makes a string column called "last_name" which cannot contain null --
  last_name VARCHAR(30) NOT NULL,
   -- Makes a numeric column called "role_id" which cannot contain null --
  role_id INT NOT NULL,
  FOREIGN KEY (roles_id)
  REFERENCES roles(id)
  ON DELETE SET NULL
   -- Makes a numeric column called "manager_id" which cannot contain null --
  manager_id INT NOT NULL
  FOREIGN KEY (manager_id)
  REFERENCES (employee_id)
);



