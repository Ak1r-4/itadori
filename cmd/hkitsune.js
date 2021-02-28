const Discord = require("discord.js");
const config = require('../config.json');
module.exports.run = (client, message, args) => {

    var superagent = require('superagent');

    if (!message.channel.nsfw)  {
    var embed = new Discord.MessageEmbed()
    .setAuthor(' NSFW not allowed here!')
    .setDescription('Use NSFW commands in a NSFW marked channel (look in channel settings, dummy)')
    .setImage('https://i.imgur.com/oe4iK5i.gif') 
      .setColor(config.embedcolor); 
    return message.channel.send(embed)
    }

    var lo = new Discord.MessageEmbed()
                .setDescription(`Please wait...`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'hkitsune'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[Image not loading? Click here](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setColor(config.embedcolor);
            
            m.edit(embed_nsfw);
        });
    });
}
