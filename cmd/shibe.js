const config = require('../config.json')
const emotes = require('../emotes.json')
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

 module.exports.run = async (client, message, args) => {
       try {
      const res = await fetch('http://shibe.online/api/shibes');
      const img = (await res.json())[0];
      const embed = new MessageEmbed()
        .setTitle('🐶  Woof!  🐶')
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