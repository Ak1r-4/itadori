const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const fetch = require('node-fetch')

module.exports = {
    config: {
        name: 'ping',
        description: 'Shows Bot Ping',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {

     const embed = new MessageEmbed()
      .setColor(config.embedcolor)
      .setThumbnail("https://media.discordapp.net/attachments/747094092596510841/767079159977082910/2102a19ea556e1d1c54f40a3eda0d775.gif")
      .setDescription(`**${message.author.tag}**  🏓`)
      .addField("• Ping:", `\`${Math.round(client.ws.ping)} ms\``, true)
      .setTimestamp()
.setFooter( "© Itadori","https://media.discordapp.net/attachments/815004467979223040/817813789382410270/0e8ea2cf9e9a50a87464380a8d083295.jpg?width=676&height=676")
    message.channel.send(embed);

    }
}
