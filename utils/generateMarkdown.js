// Function to return the license badge link based on the license name
function renderLicenseBadge(license) {
  if (license === "Mozilla Public License 2.0") {
    return "https://img.shields.io/badge/License-mpl--2.0-orange";
  } else if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/License-apache--2.0-green";
  } else if (license === "MIT License") {
    return "https://img.shields.io/badge/License-mit-red";
  } else {
    return "";
  }
}

// Function to return the license link based on the license name
function renderLicenseLink(license) {
  if (license === "Mozilla Public License 2.0") {
    return "https://choosealicense.com/licenses/mpl-2.0/";
  } else if (license === "Apache License 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license === "MIT License") {
    return "https://choosealicense.com/licenses/mit/";
  } else {
    return "";
  }
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
![badge](${renderLicenseBadge(license)})
`;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#installation">installation</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

${data.description}

![badge](${data.badgeLink})

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

## Contact

If you have any further questions, or would like to get ahold of me, contact me below!

* GitHub: ${data.username}

* Email: ${data.email}

${licenseSection}
---
`;
}

module.exports = generateMarkdown;
