const employee = require("./employee");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


function generateHTML(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
          <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
          <title>Team Roster</title>
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
            
                <div class="container">

                    <div class="card border-success mb-3" style="max-width: 18rem;">
                        <div class="card-header"> ${answers.name} </div>
                        <div class="card-body text-success">
                            <h5 class="card-title"> ${answers.role} </h5>
                            <p class="card-text">${answers.name} role ID is ${answers.id} </p>
                        </div>
                    </div>

                </div>

            </div>
        </body>
    </html>` ;
}

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "checkbox",
            message: "What is your role at company ?",
            name: "role",
            choices: ['manager', 'engineer', 'intern']
        }
    ])
    .then(answers => {
        console.log(answers);
        const html = generateHTML(answers);

        return writeFileAsync("employee.html", html);

        // switch(answers.role) {
        //     case 'manager':

        //     break;
        //     case 'engineer':
        //     inquirer
        //     .prompt({
        //         type: "input",
        //         message: "What is your github username?",
        //         name: "github"
        //     });
        //     break;
        //     case 'intern':
        //     inquirer
        //     .prompt({
        //         type: "input",
        //         message: "What is the school you are coming from?",
        //         name: "school"
        //     })
        // }
    })
    .then(function(){
        console.log("Successfully wrote to html file");
    })
    .catch(function(error){
        console.log(error);
    })

