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
         results: [], //this may need to be changed in order to pass test 9 later



      }

      for (let i = 0; i < message.commands.length; i++) {
         if (message.commands[i].commandType === 'STATUS_CHECK') {
            returnResponse.results.push(
               {
                  completed: true,
                  roverStatus: { mode: this.mode, generatorWatts: this.generatorWatts, position: this.position }
               })
               
         }else {returnResponse.results.push("command not recognized")}


         let roverStatus = {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position

         }

         //pseudo coding:
         //write steps here and make a plan 
         //will need to write results: [array]
         //itterate through array of commands that are stored with the message
         //push into array based on command types (will require conditional if statement)
         //
         //}
      }
      return returnResponse
   }
      // }}


}
      module.exports = Rover;