DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE department
(
	id INT NOT NULL,
	department_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
	id INT NOT NULL,
	title varchar(30) NOT NULL,
	salary DECIMAL(10,4),
	department_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee
(
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id)
);

INSERT INTO department (id ,department_name) VALUES ( 01 , 'Production');
INSERT INTO department (id ,department_name) VALUES ( 03 , 'Research and Development');
INSERT INTO department (id ,department_name) VALUES ( 04 , 'Marketing');
INSERT INTO department (id ,department_name) VALUES ( 05 , 'Human Resource Management');
INSERT INTO department (id ,department_name) VALUES ( 06 , 'Accounting and Finance');


INSERT INTO role (id, title, salary, department_id) VALUES (001 , 'Production Manager' , 150000 , 01);
INSERT INTO role (id, title, salary, department_id) VALUES (002 , 'Quality control manager' , 100000 , 04);
INSERT INTO role (id, title, salary, department_id) VALUES (003 , 'Bookkeeper' , 85000 , 06);
INSERT INTO role (id, title, salary, department_id) VALUES (004 , 'Office manager' , 95000 , 05);
INSERT INTO role (id, title, salary, department_id) VALUES (005 , 'Research Scientist' , 75000 , 03);


INSERT INTO employee (id, first_name, last_name , role_id) VALUES ( 0001, 'Micha', 'Petrov', 001);
INSERT INTO employee (id, first_name, last_name , role_id) VALUES ( 0002, 'Anton', 'Lebedev', 002);
INSERT INTO employee (id, first_name, last_name , role_id) VALUES ( 0003, 'Vladimir', 'Ivanov', 003);
INSERT INTO employee (id, first_name, last_name , role_id) VALUES ( 0004, 'Ivan', 'Surkov', 004);
INSERT INTO employee (id, first_name, last_name , role_id) VALUES ( 0005, 'Irina', 'Petrova', 005);


select * from employee;
