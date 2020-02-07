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
    let query = "SELECT * FROM employee";
    connection.query(query, "SELECT * FROM employee", function(err, res) {
        console.log(res)
        });

        runApp();
};

function viewByDepartment() {

    runApp();
};

function viewByManager() {

    runApp();
};

function addEmployee() {

    runApp();
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