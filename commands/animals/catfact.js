const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'catfact',
        description: 'give u a catfact',
        aliases: [""],
        usage: ``,
        accessableby: "",
    },
    run: async (client, message, args) => {
    


    try {
      const res = await fetch('https://catfact.ninja/fact');
      const fact = (await res.json()).fact;
      const embed = new MessageEmbed()
        .setTitle('🐱  Cat Fact  🐱')
        .setDescription(fact)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(config.embedcolor);
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
    }
  }
}