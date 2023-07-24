// Establish Global Variables
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
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
        choices: ["None", "MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU License 3.0"]
    },
];
// Function to prompt the user with the defined questions
async function promptUser() {
    try {
      const data = await inquirer.prompt(questions);
      return data;
    } catch (error) {
      console.error("Error occurred while prompting questions:", error);
      throw error;
    }
  }
// Main function to initialize the process
  async function init() {
    try {
      const userData = await promptUser();
      const markdownContent = generateMarkdown(userData);
      await writeFileAsync("professionalREADME.md", markdownContent);
      console.log("Yeehaw! That's a Success!");
    } catch (error) {
      console.error("Error occurred while generating README:", error);
    }
  }
// Call the 'init' function to start the process
  init();