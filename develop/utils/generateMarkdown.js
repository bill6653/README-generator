// TODO: Create a function that returns a license badge based on which license is passed in

const { up } = require("inquirer/lib/utils/readline");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;
    switch(license) {
      case "MIT":
        licenseLink = "https://mit-license.org/";
        break;
      case "BSD":
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "GPL": 
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
        break;
      default:
        licenseLink = "";
        break;
    }
    return licenseLink;
  }
  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
    let licenseSection = "";
  
    if (license != "None") {
      licenseSection += "## License\n"
      licenseSection += "Please see " + renderLicenseLink(license) + " to get info about this license\n";
    }
    return licenseSection;
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const sections = ["Description", "Installation", "Testing", "Contribution", "Mock-Up", "Application", "License", "Contact"];
  // add title
    let markdown = "# " + data.title + "\n";
  
  // display license badge at top of readme
    markdown += renderLicenseBadge(data.license) + "\n";
  
  // add Table of Contents
    markdown += "## Table of Contents\n";
    for (let i = 0; i < sections.length; i++) {
      if (! (sections[i] === "License" && data.license === "None")) {
        markdown += i + 1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
      }
    }
    markdown += "\n";

    

}