const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const config = require('../config.json')
const emotes = require('../emotes.json') 
 
 module.exports.run = async (client, message, args) => {

 try {
 let res = await fetch('https://meme-api.herokuapp.com/gimme');
      res = await res.json();
      const embed = new MessageEmbed()
        .setTitle(res.title)
        .setURL(res.url)
        .setImage(res.url)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(config.embedcolor);
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
    }
  }