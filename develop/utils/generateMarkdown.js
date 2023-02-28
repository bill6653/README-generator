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
