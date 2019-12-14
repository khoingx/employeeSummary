const employee = require("./employee");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your role manager, engineer or intern ?",
            name: "role"
        }
    ])
    .then(answers => {
        // console.log(answers);
        switch(answers.role) {
            case 'manager':
            inquirer
            .prompt({
                type: "input",
                message: "What is your office number?",
                name: "officeNumber"
            });
            break;
            case 'engineer':
            inquirer
            .prompt({
                type: "input",
                message: "What is your github username?",
                name: "github"
            });
            break;
            case 'intern':
            inquirer
            .prompt({
                type: "input",
                message: "What is the school you are coming from?",
                name: "school"
            })
        }

        // if (answers.role === 'manager') {
        //     console.log('manager');
        // }
        // else if (answers.role ==='engineer') {
        //     console.log('engineer');
        // }
        // else if (answers.role ==='intern') {
        //     console.log('intern');
        // }
        // else (
        //     console.log("you do not enter valid data")
        // )
    })

    