
let cards = [];

function generateManagerCard(managerData){
  return `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${managerData.name}</br>Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${managerData.getID()}</li>
    <li class="list-group-item">Email Address: ${managerData.getEmail()}</li>
    <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
  </ul>
</div>`
}

function generateEngineerCard(engineerData){
  return `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${engineerData.name}</br>Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${engineerData.getID()}</li>
    <li class="list-group-item">Email Address: ${engineerData.getEmail()}</li>
    <li class="list-group-item">GitHub Profile: ${engineerData.getGitHub()}</li>
  </ul>
</div>`
}

function generateInternCard(internData){
  return `<div class="card" style="width: 18rem;">
  <div class="card-header">
    ${internData.name}</br>Intern
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID: ${internData.getID()}</li>
    <li class="list-group-item">Email Address: ${internData.getEmail()}</li>
    <li class="list-group-item">School: ${internData.getSchool()}</li>
  </ul>
</div>`
}


const generatePage = (template) => {
  
  
  for(i=0; i < template.length; i++){
    if (template[i].getRole() === "Manager") {
      cards.push(generateManagerCard(template[i]));
    } 
    if (template[i].getRole() === "Intern") {
      cards.push(generateInternCard(template[i]));
    } 
    if (template[i].getRole() === "Engineer") {
      cards.push(generateEngineerCard(template[i]));
    } 
  }

  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
  
      <title>Team Manager</title>
  </head>
  
  <body class = "d-flex justify-content-around">
  ${cards.join(" ")}
  </body>

  </html> `;
}


module.exports = dataPassedIn => {return generatePage(dataPassedIn)};
