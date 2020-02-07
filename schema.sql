DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id DECIMAL(10,4) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role
(
	id INT NOT NULL,
	title varchar(30) NOT NULL,
	salary DECIMAL NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (id),
);

CREATE TABLE department
(
	id INT NOT NULL,
	department_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

select * from employee;
