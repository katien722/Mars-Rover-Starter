const Message = require('../message.js');
const Command = require('../command.js');


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


});
});

