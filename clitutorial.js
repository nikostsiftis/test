#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1');
  
program
  .command('hi')
  .description('intialize project configuration')
  .action(function(){
    console.log('Hi my Friend!!!');
  });
  
program
  .command('bye [name]')
  .description('initialize project configuration')
  .action(function(name){
    console.log('Bye' + name + '. It was good to see you!');
  });
  
program 
  .command('*')
  .action(function(){
    console.log('Enter a Valid command');
  });
  
program.parse(process.argv);
