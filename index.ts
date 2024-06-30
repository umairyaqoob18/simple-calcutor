import inquirer from "inquirer";
//Asking question for inquirier
let answer = await inquirer.prompt([
{message:"enter the first number",type:"number",name:"firstnumber"},
{message:"enter the second number",type:"number",name:"secondnumber"},
{
    message:"select one operator to perfoam operations",
    type:"list",
    name:"operator",
    choices:["Additions","subtraction","multiply","division"],
}
])
// conditional statements if-Else
if(answer.operator ==="Additions"){
    console.log(answer.firstnumber + answer.secondnumber)
}
else if (answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
}
else if (answer.operator ==="multiply" ){
    console.log(answer.firstnumber * answer.secondnumber)
}
else if (answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else{
    console.log("invalid input")
}