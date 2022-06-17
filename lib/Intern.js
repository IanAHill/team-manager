/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Import parent Employee class by requiring it into your module
const Employee = require("./Employee");
// Create Intern class inheriting (extends) from Empoyee class
//  * create constructor with parameters for id, name, email, school and set properties (member variables) respectively
//    - you may want to first initialize the parent's properties
//  * create get role method which overwrites the parent get role method and returns Intern as role
//  * create get school method which returns school property
// Exports the Intern class

class Intern extends Employee {
  constructor(id, name, email, school){
    console.log(name);
    super(id, name, email);
    this.school = school;
  }
  getRole(){
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern; 