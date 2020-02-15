const mysql = require("mysql");
const inquirer = require("inquirer");
// require("console.table");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Rk19822006",
    database: "employeeDB"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("")
    console.log("|+++++++++++++++++++++++++++++++++++++++++++++++++++++++|")
    console.log("|+++++++++++++++++++++++++++++++++++++++++++++++++++++++|")
    console.log("|                 ----------------------                |")
    console.log("|+++++++++++++++++|| EMPLOYEE TRACKER ||++++++++++++++++|")
    console.log("|                 ----------------------                |")
    console.log("|+++++++++++++++++++++++++++++++++++++++++++++++++++++++|")
    console.log("|+++++++++++++++++++++++++++++++++++++++++++++++++++++++|")
    console.log("")
    runApp();
});

function runApp() {

    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View Departments",
                "View All Roles",
                "View Employees by Manager",
                "Add New Employee",
                "Remove Employee",
                "Update an Employees Role",
                "Update an Employees Manager",
                "Add Role",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View Departments":
                    viewDepartments();
                    break;

                case "View Employees by Manager":
                    viewByManager();
                    break;

                case "Add New Employee":
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Update an Employees Role":
                    updateRole();
                    break;

                case "Update an Employees Manager":
                    updateManager();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}


function viewEmployees() {
    connection.query(`SELECT e.first_name, e.last_name, er.title, er.salary, ifnull(concat(mgr.first_name," ", mgr.last_name), "") as manager, department_name
    FROM employee e
    JOIN emp_role er on e.role_id = er.id
    JOIN department d on er.department_id = d.id
    LEFT JOIN employee mgr on mgr.id = e.manager_id`, function (err, res) {
        if (err) throw err;
        console.table(res);
        runApp();
    })
};

function viewDepartments() {
    connection.query(`SELECT d.department_name, er.title, er.salary
    FROM department d
    JOIN emp_role er on d.id = er.department_id`, function (err, res) {
        if (err) throw err;
        console.table(res);
        runApp();
    })
}

function viewByManager() {
    connection.query("SELECT * FROM employee WHERE manager_id is NULL", function (err, managers) {
        if (err) throw err;
        var managerArray = managers.map(manager => ({ name: `${manager.first_name} ${manager.last_name}`, value: manager.id }));

        inquirer
            .prompt(

                {
                    name: "manager",
                    type: "list",
                    message: "Who is the employee's manager ? ",
                    choices: managerArray
                }
            )
            .then(function (answer) {
                connection.query(`SELECT e.id, e.first_name, e.last_name, er.title, er.salary
                FROM employee e
                JOIN emp_role er on e.role_id = er.id
                WHERE ?`,
                    { manager_id: answer.manager },
                    function (err, res) {
                        if (err) throw err;
                        console.table(res);
                        runApp()
                    });
            });
    });
};




function addEmployee() {
    connection.query("SELECT * FROM emp_role", function (err, roles) {
        if (err) throw err;
        connection.query("SELECT * FROM employee WHERE manager_id is NULL", function (err, managers) {
            if (err) throw err;
            var managerArray = managers.map(manager => ({ name: `${manager.first_name} ${manager.last_name}`, value: manager.id }));
            var choiceArray = roles.map(role => ({ name: role.title, value: role.id }))
            // for (var i = 0; i < manager.length; i++) {

            //     managerArray.push(`${manager[i].id}`);
            // }


            // for (var i = 0; i < results.length; i++) {
            //     choiceArray.push(`${results[i].title}`);
            // }

            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "first_name",
                        message: "Please enter first name of new employee"
                    },
                    {
                        type: "input",
                        name: "last_name",
                        message: "Please enter last name of new employee"

                    },
                    {
                        name: "role",
                        type: "list",
                        message: "What is the employee's role ?",
                        choices: choiceArray
                    },
                    {
                        name: "manager",
                        type: "list",
                        message: "Who is the employee's manager ? ",
                        choices: managerArray
                    }
                ])
                .then(function (answer) {
                    connection.query(
                        "INSERT INTO employee SET ?",
                        {
                            first_name: answer.first_name,
                            last_name: answer.last_name,
                            role_id: answer.role,
                            manager_id: answer.manager
                        },
                        function (err) {
                            if (err) throw err;
                            console.log("New employee was created successfully!");
                            runApp()
                        }
                    );
                });
        });
    });
};

function removeEmployee() {


    runApp();
};

function updateRole() {
    connection.query("SELECT * FROM emp_role", function (err, roles) {
        if (err) throw err;
        connection.query(`SELECT * FROM employee`, function (err, employees) {
            if (err) throw err;
            var employeesArray = employees.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }));
            var choiceArray = roles.map(role => ({ name: role.title, value: role.id }))

            inquirer
                .prompt([

                    {
                        name: "employee",
                        type: "list",
                        message: "Which employee's role do you want to update?",
                        choices: employeesArray
                    },
                    {
                        name: "role",
                        type: "list",
                        message: "What role do you want to assign to selected employee?",
                        choices: choiceArray
                    }
                ]).then(function (answer) {
                    connection.query(
                        "UPDATE employee SET ? WHERE?", [{ role_id: answer.role }, {id: answer.employee}], 
                        function (err) {
                            if (err) throw err;
                            console.log("The Employee's role was updated successfully!");
                            runApp()
                        }
                    );
                });
        })
    })
};

function viewRoles() {

    connection.query(`SELECT title, salary, department_name
    FROM emp_role er
    JOIN department d on er.department_id = d.id`, function (err, res) {
        if (err) throw err;
        console.table(res);
        runApp();
    })
};


function addRole() {

    runApp();
};