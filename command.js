class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 //remember that a class can be thought of as instructions for how to build the objects with that class name
 }
 
 module.exports = Command;  