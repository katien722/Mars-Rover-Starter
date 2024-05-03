const Command = require('../command.js');


describe("Command class", function() {
//TEST 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  //TEST 2 below:
  it("constructor sets command type", function() {
    let command = new Command("commandType")
    expect(command.commandType).toEqual("commandType")
   
  })

//TEST 3
 it("constructor sets a value passed in as the 2nd argument", function() {
 let command = new Command("value", "value2")
 expect(command.value).toEqual("value2")

 })

});