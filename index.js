// These are the imports
const inquirer = require("inquirer");
const db = require("./config/connection.js");
const mysql = require("mysql2");
var figlet = require('figlet');
const cTable = require("console.table");


figlet('Empire: Employees', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

const employeePrompts = () => {
    
    inquirer.prompt([

        {
            type: "list",
            name: "start",
            choices: ["View all departments", "Add department", "View all Roles", "Add role", "View all employees", "Update employee role", "Add employee", "Quit"]
        },
    ])
        .then((data) =>{
            switch(data.start){
                case "View all departments":
                    showDepartments();
                    break
                case "Add Department":
                    addDepartment();
                    break
                case "View all roles":
                    showRoles();
                    break
                case "Add role":
                    addNewRole();
                    break
                case "Update employee role":
                    updateEmployeeRole();
                    break
                case "View all employees":
                    showEmployees();
                    break
                case "Add employee":
                    addEmployee();
                    break
                case "Quit":
                    db.end();
                    return
            }
        })
        .catch((err) => {
            console.error(err);
    });
}

//Show All Departments
function showDepartments() {
    db.query("SELECT * FROM department;",
    (err, results) =>{
        if (err) throw err;
        console.table(results);
        employeePrompts(); 
    });
}

//Adds a new department
function addDepartment() {
    inquirer.prompt ([
        {
            type: "input",
            name: "newDepartment",
            message: "Please name your new department"
        }
    ])
    .then((data) =>{
        let { newDepartment } = data;
    db.query (
        "INSERT INTO Department SET ?",
        {
            title: newDepartment
        },
        function (err, results) {
        console.table(results); 
        console.log("Your new department has been added");
        employeePrompts();
        });
    });
} 

//Show all roles
// function showRoles() {
//     db.query("SELECT * FROM roles;", 
//     (err, results) => {
//         if (err) throw err;
//         console.table(results);
//         employeePrompts();
//     });
// }

function showRoles() {
    db.query('SELECT * FROM roles', 
    (err, results) =>{
        if (err) throw err;
        console.table(results);
        employeePrompts();
    });
}

//Add new role
function addNewRole() {
    db.query("SELECT * FROM department",
    function (err, results) {
        departmentList = results.map((department) => {
            return {
                name: department.title,
                value: department.id,
            };
        });
            inquirer.prompt([
                {
                    type: "input",
                    message: "What do you want to name the new role?",
                    name: "title",
                },
                {
                    type: "input",
                    message: "What is the salary of the new role?",
                    name: "salary",
                },
                {
                    type: "list",
                    message: "Pick a department this new role will be under:",
                    name: "department_id",
                    choices: departmentList,
                }
            ])
            .then((data) => {
                const newRole = "INSERT INTO roles SET ?";
                db.query(newRole, data, function (err, results){
                    if (err) throw err;
                    console.log("Your new role has been created");
                    employeePrompts();
                });
            });
        });
    };


//update employee's role
function updateEmployeeRole() {
    db.query("SELECT id, title FROM roles", 
    (err, results)=> {
        roleOptions= results.map((roles)=> {
            return { name: roles.title, value: roles.id };
        });
        db.query("SELECT id, first_name, last_name FROM employee",
        function(err, results){
            employeeList = results.map((employee) =>{
                return {
                    name: employee.last_name + ", " + employee.first_name,
                    value: employee.id,
                };
            });
            
            inquirer.prompt([
                {
                    type: "list",
                    message: "Select the employee you would like to update",
                    name: "updateEmployee",
                    choices: employeeList,
                },
                {
                    type: "list",
                    message: "What would you like their new role to be?",
                    name: "newEmployeeRole",
                    choices: roleOptions,
                }
            ])
            .then((data) => {
                db.query("UPDATE employee SET roles_Id = ? WHERE id = ?",
                [data.newEmployeeRole, data.updateEmployee],
                function (err, results) {
                    console.log(employeeList);
                    console.log(`Your employee update has been completed`);
                    employeePrompts();
                });
            });
        });
    
    })
}

// Shows all employees
function showEmployees() {
    db.query('SELECT * FROM employee', 
    (err, results) =>{
        if (err) throw err;
        console.table(results);
        employeePrompts();
    });
}

//Adds a new employee
function addEmployee() {
    db.query (
        "SELECT id, first_name, last_name FROM employee",
        (err, results) => {
            employeeList = results.map((employee) => {
                return {
                    name: employee.last_name + ", " + employee.first_name,
                    value: employee.id
                };
            });
            employeeList.push({name: "none", value: "null"});
            db.query("SELECT id, title FROM roles",
            (err, results) => {
                roleList = results.map((roles) => {
                    return {
                        name: roles.title,
                        value: roles.id
                    };
                });
            
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the new employees last name?",
                    name: "lastName",
                },
                {
                    type: "input",
                    message: "What is the new employees first name?",
                    name: "firstName",
                },
                {
                    type: "list",
                    message: "What is the new employees role",
                    name: "employeeRole",
                    choices: roleList,
                },
                {
                    type: "list",
                    message: "Who is the new employees manager",
                    name: "employeeManager",
                    choices: employeeList,
                },
            ])
            .then((data) => {
                let newEmployee = data;
                let { lastName, firstName } = newEmployee;
                db.query("INSERT INTO employee SET ?",
                {
                    last_name: lastName,
                    first_name: firstName,
                    roles_id: newEmployee.employeeRole,
                    manager_id: newEmployee.employeeManager
                },
                (err, results) => {
                    if (err) console.error(err);
                    console.log(`${newEmployee.lastName}, ${newEmployee.firstName} has been added successfully`)
                    employeePrompts();
                });
            });
        });
    });
}    


employeePrompts();


