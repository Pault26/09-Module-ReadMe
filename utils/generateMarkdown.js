// TODO: Create a function that returns a license badge based on which license is passed in
let badgeLink = "";
let licenseLink = "";
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === "None"){
    let badgeLink = "";
    let licenseLink = "";
  }
  if (data.license === "Mozilla Public License 2.0"){
    badgeLink = "https://img.shields.io/badge/License-mpl--2.0-orange";
    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
  }
  if (data.license === "Apache License 2.0"){
    badgeLink = "https://img.shields.io/badge/License-apache--2.0-green";
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  }
  if (data.license === "MIT License"){
    badgeLink = "https://img.shields.io/badge/License-mit-red";
    licenseLink = "https://choosealicense.com/licenses/mit/"
  }
  return `# ${data.title}
   
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>

  ## About The Project
  
  ${data.description}
  
  ![badge]${data.badgelink}

  ## Usage
  
  ${data.usage}
  
     ![-YOUR PROJECT NAME](-LINK TO YOUR SCREENSHOT-)

  ## Installation
  
  ${data.installation}
  

  ## Credits
  
  ${data.contribution}

  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch ("git checkout -b feature/AmazingFeature")
3. Commit your Changes ("git commit -m 'Add some AmazingFeature")
4. Push to the Branch ("git push origin feature/AmazingFeature")
5. Open a Pull Request
  
  ## Questions
  
  If you have any further questions, or would like to get ahold of me, contact me below!
  
  * GitHub: ${data.username}
  
  * Email: ${data.email}
  
  ## License
  
  For more information about the license that was used, follow the link below!
  
  ${licenseLink}
  
  ---
  `
  };

module.exports = generateMarkdown;
