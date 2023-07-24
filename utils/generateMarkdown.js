// Function to Generate Full Markdown
function generateMarkdown(data) {
  // Establish What License to use in ReadMe
  if (data.license === "Mozilla Public License 2.0") {
    data.badge = '[![badge](https://img.shields.io/badge/License-mpl--2.0-orange)](https://choosealicense.com/licenses/mpl-2.0/)';
    data.licenseLink = `## License
  
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/mpl-2.0/`;
  }
  else if (data.license === "Apache License 2.0") {
    data.badge = '[![badge]("https://img.shields.io/badge/License-apache--2.0-green")]("https://choosealicense.com/licenses/apache-2.0/")';
    data.licenseLink = `## License
  
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/apache-2.0/`
  }
  else if (data.license === "MIT License") {
    data.badge = '[![badge](https://img.shields.io/badge/License-mit-red)](https://choosealicense.com/licenses/mit/)';
    data.licenseLink = `## License
  
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/mit/`
  }
  else (data.badge = "", data.licenseLink = "");

  return `# ${data.title}

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">installation</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

${data.badge}

${data.description}

${data.deployedWebsite}

## Usage

${data.usage}

![${data.imgAlt}](${data.screenshot})

${data.screenshotSubtitle}

## Built With

${data.librariesAndTools}

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

If you have any further questions, feel free to reach out at any of the below places!

* GitHub: ${data.username}

* Email: ${data.email}

## License
${data.licenseLink}
---
`
};
// Export ReadMe
module.exports = generateMarkdown;
