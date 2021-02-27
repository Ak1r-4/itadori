const Discord = require('discord.js');
const config = require('../config.json');
const { MessageEmbed } = require('discord.js')
const emotes = require('../emotes.json')
const fetch = require('node-fetch')
const Zalgo = require('to-zalgo')
 module.exports.run = async (client, message, args) => {

           const embed = new MessageEmbed()
     .setColor(config.embedcolor)
     .setDescription(`${Zalgo(args.join(" "))}`)
     .setTimestamp()
     .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
    message.channel.send(embed)

 }