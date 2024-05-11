import inquirer from "inquirer";

// Asking q from user to throgh inquirer

let answers = await  inquirer.prompt([
  { message: "ENTER YOUR FIRST NUMBER",type: "number", name: "FirstNumber",},
  { message: "ENTER YOUR SECOND NUMBER",type: "number", name: "SecondNumber"},

  {
     message: "SELECT ONE OPERATER TO PERFORM OPERATIONS",
     type: "list",
     name: "operater",
     choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],

  }
   

])
console.log(answers);
// Else if statement use 
if(answers.operater === "ADDITION"){
  console.log(answers.FirstNumber + answers.SecondNumber)
}else if(answers.operater === "SUBTRACTION"){
   console.log(answers.FirstNumber - answers.SecondNumber)
}else if(answers.operater === "MULTIPLICATION"){
   console.log(answers.FirstNumber * answers.SecondNumber)
}else if(answers.operater === "DIVISION"){
   console.log(answers.FirstNumber / answers.SecondNumber)
}else{

   console.log("YOU TYPE A INVALID output!")}
  




  
