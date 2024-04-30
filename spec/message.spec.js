const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

//TEST 4

describe("Message class", function () {
    it("throws error if a name is NOT passed into the constructor as the first parameter", function () {
        expect(function () { new Message(); }).toThrow(new Error('Name required.'));
    });
    //TEST 5
    it("constructor sets name", function () {
        let message = new Message("name")
        expect(message.name).toEqual("name")

    });

//TEST 6
    it("contains a commands array passed into the constructor as the 2nd argument", function () {
    let message = new Message("commands", "array of commands")
    expect(message.commands).toEqual("array of commands")
    // console.log("commands")

    // This test confirms that the commands property of a new message object contains the data 
    // passed in from the Message(name, commands) call.

});
}) 

