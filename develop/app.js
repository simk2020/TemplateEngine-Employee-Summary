const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What's the manager name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What's the manager ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What's the manager Email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What's the manager office number?"
        },
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
        console.log("This is the new manager" + JSON.stringify(manager))

        employeeArr.push(manager)
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            
            // Something else when wrong
        }
    });





// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What's the engineer name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's the engineer ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the engineer Email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the engineer Github?"
        },
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        console.log("This is the new engineer" + JSON.stringify(engineer))

        employeeArr.push(engineer)
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            
            // Something else when wrong
        }
    });
    
    inquirer
    .prompt([
        {
            type: "input",
            name: "internName",
            message: "What's the intern name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What's the intern ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What's the intern Email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the name of intern's School ?"
        },
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        console.log("This is the new engineer" + JSON.stringify(intern))

        employeeArr.push(intern)
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            
            // Something else when wrong
        }
    });

    function createTeam (){
        fs.writeFile (outputPath,render(employeeArr), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
        }
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
