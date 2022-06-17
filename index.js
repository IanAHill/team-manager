// Import classes for Manager, Engineer, Intern
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const inquirer = require('inquirer');
// Imports 'path' from node library to be used to create output folder and file name
//    Hint: __dirname, process.cwd() or you can use relative path without using 'path' library function
const path = require("path");

const fs = require("fs");

const page_template = require("./src/page_template.js");

// Create variables for the output folder and the html file name
const htmlFiles = "HTML_files"
const htmlFile = "index.html"
// Create an empty array to store the team member objects
const teamArray = [];
// Create an empty array to store employee IDs to be used to check for the duplicates
const employeeIDs = new Set();

// **********************
// Main Process
// **********************

// Call the starter function

// starter function to start the program
//
//  1a. call create manager function

//  1b. function to create manager
function createManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter manager's name",
      name: "employeeName"
    },
    {
      type: "input",
      message: "Please enter employee ID",
      name: "employeeID"
    },
    {
      type: "input",
      message: "Please enter manager's email address",
      name: "employeeEmail"
    },
    {
      type: "input",
      message: "Please enter manager's office number",
      name: "employeeOfficeNumber"
    },
  ])
    .then((data) => {
      const newManager = new Manager(data.employeeID, data.employeeName, data.employeeEmail, data.employeeOfficeNumber);
      teamArray.push(newManager);
      createTeam();
    })
}


function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "selectNext",
      choices: ["add engineer", "add intern", "exit (done adding employees)"]
    }
  ])
    .then((data) => {
      switch (data.selectNext) {
        case "add engineer":
          createEngineer();
          break;
        case "add intern":
          createIntern();
          break;
        case "exit (done adding employees)":
          buildTeam();
          break;
      }
    })
}

function createEngineer() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter engineer's name",
      name: "employeeName"
    },
    {
      type: "input",
      message: "Please enter employee ID",
      name: "employeeID"
    },
    {
      type: "input",
      message: "Please enter engineer's email address",
      name: "employeeEmail"
    },
    {
      type: "input",
      message: "Please enter engineer's GitHub profile name",
      name: "gitHub"
    },
  ])
    .then((data) => {
      const newEngineer = new Engineer(data.employeeID, data.employeeName, data.employeeEmail, data.gitHub);
      teamArray.push(newEngineer);
      createTeam();
    })

}

function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter intern's name",
      name: "employeeName"
    },
    {
      type: "input",
      message: "Please enter employee ID",
      name: "employeeID"
    },
    {
      type: "input",
      message: "Please enter intern's email address",
      name: "employeeEmail"
    },
    {
      type: "input",
      message: "Please enter intern's school",
      name: "school"
    },
  ])
    .then((data) => {
      console.log(data);
      const newIntern = new Intern(data.employeeID, data.employeeName, data.employeeEmail, data.school);
      teamArray.push(newIntern);
      createTeam();
    })

}

function buildTeam() {
  const generatedPage = page_template(teamArray);
  console.log(generatedPage);
  if (fs.existsSync('html_files')) {
    console.log('The path exists.');
  } else fs.mkdirSync("html_files");

  fs.writeFile("./html_files/index.html", generatedPage, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

createManager();
