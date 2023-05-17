// Application Packaging
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// ReadMe Question Array
const questions = [
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },

    {
        type: "input",
        name: "email",
        message: "what email would you like listed in the repository",
    },

    {
        type: "input",
        name: "title",
        message: "What is the name of your repository?",
    },

    {
        type: "input",
        name: "description",
        message: "Describe your repository. You can copy and paste or type in the consol. This will be the 'About The Project' section of your README.",
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required for installation? (if applicable)",
    },

    {
        type: "input",
        name: "usage",
        message: "Please include instructions on how to use your application! You will also find a blank spot in your README below what you type here, that you can link a screenshot to.",
    },

    {
        type: "input",
        name: "contribution",
        message: "Who is contributing? (please list contributors' github usernames separated by commas).",
    },

    {
        type: "checkbox",
        name: "license",
        message: "Choose the license associated with your repository.",
        choices: ["None", "MIT License", "Apache License 2.0", "Mozilla Public License 2.0"]
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile("professionalREADME.md", data, (err) =>
//         err ? console.log(err) : console.log("Success!")
//     );
// }

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile("professionalREADME.md", generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log("Yeehaw! thats a Success!")
        );
    }
    )
}

// Function call to initialize app
init();