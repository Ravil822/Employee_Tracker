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

let role;
connection.query("SELECT * from role", (res) => role = res)

inquirer.prompt([{
    type: "list",
    choices: role.map(role => role.title),
    name: "role",
    message: "enter role"
}]).then(res => {
    let roleId = role.filter(role => role.name === res.role)[0].id
    console.log(roleId)
});