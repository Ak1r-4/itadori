const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'duck',
        description: 'shof u random ducks images',
        aliases: ["ducks"],
        usage: ``,
        accessableby: "",
    },
    run: async (client, message, args) => {
    


       try {
      const res = await fetch('https://random-d.uk/api/v2/random');
      const img = (await res.json()).url;
      const embed = new MessageEmbed()
        .setTitle('🦆  Quack!  🦆')
        .setURL(img)
        .setImage(img)
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
