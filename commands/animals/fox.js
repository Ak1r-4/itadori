const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'fox',
        description: 'show u random foxs images',
        aliases: ["foxs"],
        usage: ``,
        accessableby: "",
    },
    run: async (client, message, args) => {
    



       try {
    const res = await fetch('https://randomfox.ca/floof/');
      const img = (await res.json()).image;
      const embed = new MessageEmbed()
        .setTitle('🦊  What does the fox say?  🦊')
        .setImage(img)
        .setURL(img)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
    }
  }
}