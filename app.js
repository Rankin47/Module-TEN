import inquirer from 'inquirer';
import fs from 'fs';

import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';

// const renderPage = require ('page-render');



const team = [];

function getManager(){
    console.log("Create Team!");
    inquirer
    .prompt([
    { 
        type: 'input',
        name: 'managerName',
        message: 'Enter Manager Name',
        validate: answer => {
            if (answer === ""){
                console.log('enter name');
                return false;
            }
            return true;
        }
    },
    {
        type:'number',
        name:'managerID',
        message:'Enter Manager ID',
        validate: answer => {
            if (answer < 0) {
                console.log('Enter Manager ID');
                return false;
            }
            return true;
        }
    },
    {
        type:'input',
        name:'managerEmail',
        message:'Enter Manager Email',
        validate: answer => {
            let passAnswer = answer.match(/\S+@\S+\.\S+/); 
            if  (passAnswer) {
                return true;
            }
            console.log("Enter Email");
            return false;
        }
     },
     {
        type:'number',
        name:'managerOffice#',
        message:'Enter Manager Office Number',
        validate: answer => {
            if (answer < 0) {
                console.log('Enter # greater than 0');
                return false;
            }
            return true;
        }
    }
    ]).then(answers => {
        let managerName = managerName
    const Manager = new Manager(answers.managersName, answers)

    team.push(Manager);
        addTeam();
});

};
function addTeam(){
    inquirer 
    .prompt([{
        type:'list',
        name: 'role',
        message: 'add another member?',
        choices: ['Engineer', 'Intern', 'Nope']
    }]).then (chosen => {
        switch (chosen.memberrole){
            case "Engineer":
                addEngineer();
                break;
                case "Intern":
                addIntern();
                break;
                case "Nope":
                buildTeam();
                break;
  }
});
};
function addEngineer(){
    inquirer
    .prompt([
        {
            type: 'Input',
        name: 'engineerName',
        message: 'Enter Engineer Name',
        validate: answer => {
            if (answer === ""){
                console.log('enter name');
                return false;
            }
            return true;
        }
    },
    {
        type:'Number',
        name:'Engineer',
        message:'Enter Engineer ID',
        validate: answer => {
            if (answer < 0) {
                console.log('Enter # greater than 0');
                return false;
            }
            return true;
        }
    },
    {
        type:'input',
        name:'engineerEmail',
        message:'Enter Engineer ID',
        validate: answer => {
            let passAnswer = answer.match(/\S+@\S+\.\S+/); 
            if  (passAnswer) {
                return true;
            }
            console.log("Enter Email");
            return false;
        }
     },
     {
        type:'Input',
        name:'engineerGithub',
        message:'Enter Engineer Github',
        validate: answer => {
            if (answer === "") {
                console.log('Please enter Github username');
                return false;
            }
            return true;
        }
    }
    ]).then(answers => {
    const Engineer = new Engineer(answers.engineersName, answers)

    team.push(Engineer);
        addTeam();
});
};
function addIntern(){
    inquirer
    .prompt([
        {
            type: 'Input',
        name: 'internName',
        message: 'Enter Intern Name',
        validate: answer => {
            if (answer === ""){
                console.log('enter name');
                return false;
            }
            return true;
        }
    },
    {
        type:'Number',
        name:'Intern',
        message:'Enter Intern ID',
        validate: answer => {
            if (answer < 0) {
                console.log('Enter # greater than 0');
                return false;
            }
            return true;
        }
    },
    {
        type:'input',
        name:'InternEmail',
        message:'Enter Intern ID',
        validate: answer => {
            let passAnswer = answer.match(/\S+@\S+\.\S+/); 
            if  (passAnswer) {
                return true;
            }
            console.log("Enter Email");
            return false;
        }
     },
     {
        type:'Input',
        name:'internGithub',
        message:'Enter Intern Github',
        validate: answer => {
            if (answer === "") {
                console.log('Please enter Github username');
                return false;
            }
            return true;
        }
    }
    ]).then(answers => {
    const Intern = new Intern(answers.internsName, answers)

    team.push(Intern);
        addTeam();
})

};
function buildTeam(){
    fs.writeFileSync('team.html', renderPage(team),"UTF-8");
}
getManager()





