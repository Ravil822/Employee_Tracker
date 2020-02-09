DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE department
(
	id INT NOT NULL AUTO_INCREMENT,
	department_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE emp_role
(
	id INT NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	salary DECIMAL(10,4) NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee
(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES emp_role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);




select * from employee;
