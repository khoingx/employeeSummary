const employee = require("./employee");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your role manager, engineer or intern ?",
            name: "name"
        }
    ])
    .then(answers => {
        if (answers.name === 'manager') {
            console.log('manager');
        }
        else if (answers.name ==='engineer') {
            console.log('engineer');
        }
        else if (answers.name ==='intern') {
            console.log('intern');
        }
        else (
            console.log("you do not enter valid data")
        )
    })

    