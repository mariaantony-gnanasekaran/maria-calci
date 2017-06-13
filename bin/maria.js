#!/usr/bin/env node

var figlet = require('figlet');
var chalk = require('chalk');
var text ="";
figlet(' Maria', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
    for (var index = 0; index < process.argv.length; index++) {
        var re = new RegExp(/--([a-zA-Z]*)/),
            matches = re.exec(process.argv[index]);
            if (matches !== null) {
             text = matches[1];
            }
        }
   var no1=parseInt(process.argv[3]);
   var no2=parseInt(process.argv[4]);
    var add =require("./../dist/addition");
    var sub =require("./../dist/subtraction");
    var mul =require("./../dist/multiplication")
    var div =require("./../dist/division");
    var mod =require("./../dist/modules");
    var fac =require("./../dist/factorial")
if(text){
if(text == "add")
console.log(chalk.blue("result is " +add.addition(no1,no2)));
if(text == "sub")
console.log(chalk.blue("result is " +sub.subtraction(no1,no2)));
if(text == "mul")
console.log(chalk.blue("result is " +mul.multiplication(no1,no2)));
if(text == "div")
console.log(chalk.blue("result is " +div.division(no1,no2)));
if(text == "mod")
console.log(chalk.blue("result is " +mod.modules(no1,no2)));
if(text == "fac")
console.log(chalk.blue("result is " +fac.factorial(no1,no2)));
}
if(text == "help" || text =="")
console.log(chalk.green(`Help :
             use --add no1 no2  for adding
             For example to add 2 and 3 use --add 2 3
             
             For substraction use --sub
             For Multiplication use --mul
             For Divisom use --div
             For Modulus use --mod
             For Factorial use --fac`));