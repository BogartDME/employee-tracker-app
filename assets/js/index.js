// These are the imports
const inquirer = require("inquirer");
const database = require("./config/connection.js");
const mysql = require("mysql2");
const consoleTable = require("console.table");


const employeePrompts = () => {
    
    inquirer.createPromptModule([

        {
            type: "list",
            name: "start",
            choices: ["View all departments", "Add department, View all Roles", "Add role", "View all employees", "Update employee role", "Add employee", "Quit"]
        },
    ])
        .then((data) =>{
            switch(data.start){
                case "View all departments":
                    return showDepts();
                case "Add Department":
                    return addDept();
                case "View all roles":
                    return showRoles();
                case "Add role":
                    return addRole();
                case "View all employees":
                    return showEmployees();
                case "Update employee role":
                    return updateRole();
                case "Add employee":
                    return addEmployee();
                case "Quit":
                    db.end();
                    return
            }
        })
        .catch((err) => {
            console.error(err);
    });
}

//View All Departments\
function showDepts() {
    db.query("SELECT * FROM department;"),
    (err, results) =>{
        if (err) throw err;
        console.table(results);
    }
}