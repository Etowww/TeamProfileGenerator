const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Initialize Empty array for team members to be added to
const teamArray = [];

const startupQuestion = [
    {
        message: 'Please enter your Team Managers name.',
        type: 'input',
        name: 'managerName',
    },
    {
        message: 'Please enter your Team Managers ID.',
        type: 'input',
        name: 'managerId',
    },
    {
        message: 'Please enter the managers email address.',
        type: 'input',
        name: 'managerEmail',
    },
    {
        message: 'Please enter the managers office number.',
        type: 'input',
        name: 'managerOffice',
    }
];

function handleManager() {
    inquirer.prompt(startupQuestion)
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
        teamArray.push(manager);
        inquirer.prompt(menuQuestions)
        .then(handleMenuChoice);
    })
}


const menuQuestions = [
    {
        message: 'Please choose a type of employee to add to your team or select exit program if you are finished.',
        type: 'list',
        name: 'employeeType',
        choices: [
            'Engineer',
            'Intern',
            'Exit Program'
        ],
    }
];


function handleMenuChoice({ employeeType }) {
    switch (employeeType) {
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        default: createHtml();
    }
}

function addEngineer() {
    inquirer.prompt([

        {
            message: 'What is the engineers name?',
            type: 'input',
            name: 'engineerName',
        },
        {
            message: 'What is the engineers ID?',
            type: 'input',
            name: 'engineerId',
        },
        {
            message: 'What is the engineers Email Address?',
            type: 'input',
            name: 'engineerEmail',
        },
        {
            message: 'What is the engineers Github Account?',
            type: 'input',
            name: 'engineerGithub',
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        inquirer.prompt(menuQuestions)
        .then(handleMenuChoice);
    })
}

function addIntern() {
    inquirer.prompt([

        {
            message: 'What is the interns name?',
            type: 'input',
            name: 'internName',
        },
        {
            message: 'What is the interns ID?',
            type: 'input',
            name: 'internId',
        },
        {
            message: 'What is the interns Email?',
            type: 'input',
            name: 'internEmail',
        },
        {
            message: 'What school does the intern attend?',
            type: 'input',
            name: 'internSchool',
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        inquirer.prompt(menuQuestions)
        .then(handleMenuChoice);
    })
}










function createHtml(){
    fs.writeFile('./dist/index.html', generateHTML(teamArray), (err)=> {
        err ? console.log(err): console.log('Html has been successfully created')
    })
}

// Starts the Application
function init() {
    handleManager()
};


init();