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
                    return showDepartments();
                case "Add Department":
                    return addDepartment();
                case "View all roles":
                    return showRoles();
                case "Add role":
                    return addRole();
                case "Update employee role":
                    return updateEmployeeRole();
                case "View all employees":
                    return showEmployees();
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
        console.log("Your new department has been added to the database");
        employeePrompts();
        });
    });
} 

//View all roles
function showRoles() {
    db.query("SELECT * FROM roles", 
    (err, results) => {
        if (err) throw err;
        console.table(results);
        employeePrompts();
    });
}

//Add new role
function addRole() {
    db.query("SELECT * FROM department",
    function (err, results) {
        departmentList= results.map((department) => {
            return {
                name: department.title,
                value: department.id,
            };
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
                db.query(newRole. data, function (err, results){
                    if (err) throw err;
                    console.log("Your new role has been created");
                    employeePrompts();
                });
            });
        });
    });
}

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
                    name: "newEmployeeRole",
                    choices: employeeList,
                },
            ])
            .then((data) => {
                db.query("UPDATE employee SET roles_Id = ? WHERE id = ?",
                [data.newEmployeeRole, data.updateEmployee],
                function (err, results) {
                    console.log("The employee updates are saved");
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
                    name: employee.first_name + "/" + employee.last_name,
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
                    console.log("New employee has been added successfully")
                    employeePrompts();
                });
            });
        });
    });
}    


employeePrompts();


