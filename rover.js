class Rover {
   constructor(position) {
      
      this.generatorWatts = 110;
      this.mode = "NORMAL";
      this.position = position;

   }
   receiveMessage(message) {
      let returnResponse = {
         message: message.name,
         results: [],

      }

      for (let i = 0; i < message.commands.length; i++) {
         if (message.commands[i].commandType === 'STATUS_CHECK') {
            returnResponse.results.push(
               {
                  completed: true,
                  roverStatus: { mode: this.mode, generatorWatts: this.generatorWatts, position: this.position }
               })
         } else if (message.commands[i].commandType === 'MOVE') {
            if (this.mode === 'LOW_POWER') {

               returnResponse.results.push(
                  {
                     completed: false
                  })
            } else {
               this.position = message.commands[i].value
               returnResponse.results.push(
                  {
                     completed: true,

                  })
            }

         } else if (message.commands[i].commandType === 'MODE_CHANGE') {
            this.mode = message.commands[i].value
            returnResponse.results.push(
               {
                  completed: true
               }
            )

         } else {
            returnResponse.results.push(
               {
                  completed: "command not recognized"
               })
         }

         let roverStatus = {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position

         }


      }
      return returnResponse
   }

}
module.exports = Rover;