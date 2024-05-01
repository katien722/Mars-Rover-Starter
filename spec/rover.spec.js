const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function () {

  // 7 tests here!

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
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];//needed again bc local scope in test 8?
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual(message, )  //needs two results if two commands....hmmmmmm??
  })

  //TEST 10


  //TEST 11


  //TEST 12



  // TEST 13

});
