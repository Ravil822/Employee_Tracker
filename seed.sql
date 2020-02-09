INSERT INTO department (department_name) VALUES ('Production');
INSERT INTO department (department_name) VALUES ('Research and Development');
INSERT INTO department (department_name) VALUES ('Marketing');
INSERT INTO department (department_name) VALUES ('Human Resource Management');
INSERT INTO department (department_name) VALUES ('Accounting and Finance');


INSERT INTO emp_role (title, salary, department_id) VALUES ('Production Manager' , 150000 , 1);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Quality control manager' , 100000 , 3);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Bookkeeper' , 85000 , 5);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Office manager' , 95000 , 4);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Research Scientist' , 75000 , 2);


INSERT INTO employee (first_name, last_name , role_id, manager_id) VALUES ('Micha', 'Petrov', 1, null);
INSERT INTO employee (first_name, last_name , role_id, manager_id) VALUES ('Anton', 'Lebedev', 2, 1);
INSERT INTO employee (first_name, last_name , role_id, manager_id) VALUES ('Vladimir', 'Ivanov', 3, 1);
INSERT INTO employee (first_name, last_name , role_id, manager_id) VALUES ('Ivan', 'Surkov', 4, null);
INSERT INTO employee (first_name, last_name , role_id, manager_id) VALUES ('Irina', 'Petrova', 5, 4);

select * from employee;