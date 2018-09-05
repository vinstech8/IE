const commando = require('discord.js-commando')
const config = require('../.././config.json')

class say extends commando.Command {
  constructor (client) {
    super(client, {
      name: 'say',
      aliases: ['s'],
      group: 'owner',
      memberName: 'say',
      description: 'IE sends a message specified by her owner.',
      details: 'IE sends a message specified by her owner. If a channel is mentioned first, she will say it in that channel. If specified with "quotes", she will only say what is inside the quotes.',
      format: '<#channel> <content>',
      examples: ['ie!say hi', 'ie!say in #channel hi', 'ie!say #channel hi', 'ie!say "hi" please'],
      args: [{
        key: 'text',
        prompt: 'What would you like me to say?',
        type: 'string'
      }]
    })
  } async run (message, args) {
    // ! No handling for owner limit
    // ! No handling for message deletion
    // ! No handling for channel mentions
    // ! No handling for 'in' notation
    // ! No handling for quote notation

    message.channel.send(args.text)
  }
}

module.exports = say
