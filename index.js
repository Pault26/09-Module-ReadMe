// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt(
    // The prompt() method takes an array of question objects that define the questions to ask the user. Each question object has a type, a name, a message, and sometimes a choices property. The type property specifies the type of question to ask (e.g., input, editor, list, etc.), the name property is used to store the user's answer to the question, and the message property is the prompt that is displayed to the user. The choices property is used for list questions to provide a list of options for the user to choose from.

    [
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?\n",
      },
      {
        type: "input",
        name: "repoTitle",
        message: "What is the exact title of your repository?\n",
      },
      {
        type: "editor",
        name: "description",
        message:
          "\nPlease enter a description of your project: \nExplain the what, why, and how of your project. \nUse the following questions as a guide: \n\t- What was your motivation? \n\t- Why did you build this project? \n\t- What problem does it solve? \n\t- What did you learn?\n",
      },
      {
        type: "input",
        name: "deployedWebsite",
        message: "Please enter deployed website URL:\n",
      },
      {
        type: "input",
        name: "imgAlt",
        message: "Please enter your screenshot Alt:\n",
      },
      {
        type: "input",
        name: "screenshot",
        message: "Please enter relative path to screenshot:\n",
      },
      {
        type: "input",
        name: "screenshotSubtitle",
        message: "Please enter screenshot subtitle:\n",
      },
      {
        type: "editor",
        name: "installation",
        message: "Please enter installation instructions for your project:\n",
      },
      {
        type: "input",
        name: "librariesAndTools",
        message:
          "Please enter libraries and tools used for your project. Write them in a list like this: \n<li>First item</li> <li>Second item</li> <li>Third item</li>:\n",
      },
      {
        type: "editor",
        name: "usage",
        message: "Please enter usage information for your project:\n",
      },
      {
        type: "list",
        name: "license",
        message:
          "\n Please choose a license for your project\n (Visit https://choosealicense.com/ if you are unsure, which license to choose):",
        choices: [
          "MIT",
          "GPL-3-0",
          "apache-2-0",
          "BSD-3-clause",
          "ISC",
          "0bsd",
        ],
      },

      {
        type: "editor",
        name: "contribution",
        message: "\nPlease enter contribution guidelines for your project:\n",
      },
      {
        type: "editor",
        name: "tests",
        message: "Please enter test instructions for your project:\n",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?\n",
      },
      {
        type: "input",
        name: "website",
        message: "What is your website URL?\n",
      },
      {
        type: "input",
        name: "webLinkPlaceholder",
        message: "What is the placeholder for the website URL?\n",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?\n",
      },
    ]
  ) 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
