const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'bird',
        description: 'show u random birds images',
        aliases: ["birds"],
        usage: ``,
        accessableby: "everyone",
    },
    run: async (client, message, args) => {
    



      try {
      const res = await fetch('http://shibe.online/api/birds');
      const img = (await res.json())[0];
      const embed = new MessageEmbed()
        .setTitle('🐦  Chirp!  🐦')
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