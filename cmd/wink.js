const Discord = require("discord.js");
const config = require('../config.json')
const emotes = require('../emotes.json')
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {

   let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;

        let { body } = await superagent.get(`https://some-random-api.ml/animu/wink`);
        const embed = new Discord.MessageEmbed()
          .setColor(config.embedcolor)
          .setTitle("Here's your Wink 😉 ")
          .setURL(body.link)
          .setDescription(`${victim} winks ${message.author}`)
          .setImage(body.link)
          .setTimestamp()
          .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
        message.channel.send(embed);
    }
