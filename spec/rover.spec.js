const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');


describe("Rover class", function () {


  //TEST 7:
  it("constructor sets position and default values for mode and generatorWatts", function () {

    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382)
    expect(rover.mode).toEqual("NORMAL")
    expect(rover.generatorWatts).toEqual(110)

  });

  //TEST 8
  it("response returned by receiveMessage contains the name of the message", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Test message with two commands",commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    console.log(message)
    expect(response.message).toEqual(message.name); 
      
  })


  //TEST 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.results.length) .toEqual(message.commands.length)  
  })

  //TEST 10
  it("responds correctly to the status check command", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.results[1]).toEqual( {
      completed: true,
      roverStatus: { mode: rover.mode, generatorWatts: rover.generatorWatts, position: rover.position }
   })

  })


  //TEST 11
  it("responds correctly to the mode change command", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.results[0]).toEqual({completed: true})
    expect(rover.mode).toEqual('LOW_POWER')

  })


  //TEST 12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'), new Command('MOVE', 12)];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.results[2]).toEqual({completed: false})
    expect(rover.position).toEqual(98382)

  })
  // TEST 13
  it("responds with the position for the move command", function () {
    let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command('STATUS_CHECK'), new Command('MOVE', 12)];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    
    console.log(rover);
    let response = rover.receiveMessage(message);
    console.log(rover)

    expect(response.results[2]).toEqual({completed: true});
    expect(rover.position).toEqual(12)
})
})