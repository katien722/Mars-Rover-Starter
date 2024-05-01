class Rover {
   constructor(position) {
// //    
this.generatorWatts = 110; 
this.mode = "NORMAL";  
this.position = position;

   }
receiveMessage(message) {
   let returnResponse = {
      message: message.name,
      commands: message.commands,
      // results : [array] ....
      
      //write more code in here
   
   }


//pseudo coding:
//write steps here and make a plan 
//will need to write results: [array]
//itterate through array of commands that are stored with the message
//push into array based on command types (will require conditional if statement)
//
//

  return returnResponse


}

}

module.exports = Rover;