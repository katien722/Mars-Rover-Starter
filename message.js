class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error("Name required.");

    }
    this.commands = commands;
    }
     //remember that a class can be thought of as instructions for how to build the objects with that class name
   }


module.exports = Message;