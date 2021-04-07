const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

let finalTeamArray = [];


function startingPrompt() {
    inquirer.prompt([
        {
            message: "Please enter a name for your team:",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            finalTeamArray.push(teamName)
            addManager();
        })

    
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is your manager's name?",
            name: "name"
        },
        {
            message: "What is your manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeamArray.push(teamMember)
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, finished input"],
            name: "addMemberInfo"
        }
        ])

        .then(function (Data) {
            switch (Data.addMemberInfo) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;

                case "Yes, add an intern":
                    addIntern();
                    break;

                case "No, finished input":
                    console.log("ready")
                    compileTeam();
                    console.log("Done")
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            message: "What is your engineer's email address?",
            name: "email"
        },
        {
            message: "What is your engineer's Github username?",
            name: "github"
        }
    ])

        .then(function (Info) {
            const name = Info.name
            const id = finalTeamArray.length + 1
            const email = Info.email
            const github = Info.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is your intern's name?",
            name: "name"
        },
        {
            message: "What is your intern's email address?",
            name: "email"
        },
        {
            message: "What is your intern's school?",
            name: "school"
        }
    ])

        .then(function (Info) {
            const name = Info.name
            const id = finalTeamArray.length + 1
            const email = Info.email
            const school = Info.school
            const teamMember = new Intern(name, id, email, school)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log("All team memeber added!.")

    const htmlFile = []
    const htmlHead = `
            <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${finalTeamArray[0]}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <link rel="stylesheet" href="../style/style.css">
        </head>

        <body>
            <div class="navbar navbar-light bg-light justify-content-center">>
                <h1 h1 class="fas fa-user-friends fa-3x">${finalTeamArray[0]}</h1>
            </div>
            <div class="card-container container row justify-content-center">
            `
    htmlFile.push(htmlHead);


    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="card">
            <div class="card-title">
                <h2 class="card-title">${finalTeamArray[i].name}</h2>
                <h2 class="card-title">${finalTeamArray[i].title}</h2>
            </div>
            <div class="card-text">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlFile.push(object)
    }

    const htmlEnd = `
    </div>
    <script src="https://kit.fontawesome.com/0656509775.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    htmlFile.push(htmlEnd);
    console.log("File Generated Ready!");

    fs.writeFile(`./demo/${finalTeamArray[0]}.html`, htmlFile.join(""), function (err) {});
}

startingPrompt()