const mysql = require("mysql");
const inquirer = require("inquirer");

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
    runApp();
});

function runApp() {
    console.log("<h1>Hi</h1>")
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add New Employee",
                "Remove Employee",
                "Update an Employees Role",
                "Update an Employees Manager",
                "View All Roles",
                "Add Role",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Employees by Department":
                    viewByDepartment();
                    break;

                case "View All Employees by Manager":
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
    let employees = [];
    connection.query(`SELECT e.first_name, e.last_name, er.title, er.salary, ifnull(concat(mgr.first_name," ", mgr.last_name), "") as manager, department_name
    FROM employee e
    JOIN emp_role er on e.role_id = er.id
    JOIN department d on er.department_id = d.id
    LEFT JOIN employee mgr on mgr.id = e.manager_id`, function (err, res) {
        if (err) throw err;
         console.table(res)             
    }).while(res => {
        console.log (res)
    });
    
};

function viewByDepartment() {

    runApp();
};

function viewByManager() {

    runApp();
};

function addEmployee() {



};

function removeEmployee() {


    runApp();
};

function updateRole() {

    runApp();
};

function viewRoles() {

    runApp();
};

function updateRole() {

    runApp();
};

function addRole() {

    runApp();
};