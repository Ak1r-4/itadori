const Discord = require('discord.js');
const config = require('../config.json');
const { MessageEmbed } = require('discord.js')
const emotes = require('../emotes.json')
const fetch = require('node-fetch')

 module.exports.run = async (client, message, args) => {

     const embed = new MessageEmbed()
      .setColor(config.embedcolor)
      .setThumbnail("https://media.discordapp.net/attachments/747094092596510841/767079159977082910/2102a19ea556e1d1c54f40a3eda0d775.gif")
      .setDescription(`**${message.author.tag}**  🏓`)
      .addField("• Ping:", `\`${Math.round(client.ws.ping)} ms\``, true)
      .setTimestamp()
      .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
    message.channel.send(embed);

    }