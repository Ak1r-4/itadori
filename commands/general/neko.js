const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json');
const superagent = require('superagent');

module.exports = {
    config: {
        name: 'neko',
        description: 'give u random  neko images',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
  
        superagent.get('https://shiro.gg/api/images/neko')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Here's your Neko")
      .setImage(response.body.url)
      .setColor(config.embedcolor)
      .setTimestamp()
      .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                title: "Something went wrong... :cry:"
            }}));
}
}