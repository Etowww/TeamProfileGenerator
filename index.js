const inquirer = require('inquirer');
const fs = require('fs');

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
    inquirer.prompt(startupQuestion);
}





















// Starts the Application
function init() {
    handleManager()
};


init();