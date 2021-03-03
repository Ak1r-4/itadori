const answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: '8ball',
        description: 'generates a 8ball game for a user',
        aliases: ["8ball"],
        usage: '<question>',
        accessableby: "",
    },
    run: async (client, message, args) => {


   const question = args.join(' ');
    if (!question) return this.sendErrorMessage(message, 0, 'Please provide a question to ask');
    const embed = new MessageEmbed()
      .setTitle('🎱  The Magic 8-Ball  🎱')
      .addField('Question', question)
      .addField('Answer', `${answers[Math.floor(Math.random() * answers.length)]}`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(config.embedcolor);
    message.channel.send(embed);
  }
}