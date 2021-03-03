const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: 'cat',
        description: 'show u random cats images',
        aliases: ["cats"],
        usage: ``,
        accessableby: "everyone",
    },
    run: async (client, message, args) => {
    



    const apiKey = '3a15b1c4-e2f9-4dd6-bbd1-17949c3d86a5'
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search', { headers: { 'x-api-key': apiKey }});
      const img = (await res.json())[0].url;
      const embed = new MessageEmbed()
        .setTitle('🐱  Meow!  🐱')
        .setImage(img)
        .setURL(img)
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