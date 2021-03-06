const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { Database } = require("quickmongo")
const db = new Database(config.database)

module.exports = {
    config: {
        name: 'chatbot',
        description: '',
        aliases: [""],
        usage: `${config.prefix}`,
        accessableby: "",
    },
    run: async (client, message, args) => {
    



      const embedd = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `🤖 ChatBot Configuration 

        **${emotes.info} Usage :**
         Type \`${config.prefix}setchatbotchannel\` - To Set a Channel 
         Type \`${config.prefix}disablechatbotchannel\` - To Disable a Channel.
         ChatBot Channel Set - None

        **${emotes.info} Examples :**
         \`${config.prefix}setchatbotchannel\` <#${message.channel.id}>
         \`${config.prefix}disablechatbotchannel\` <#${message.channel.id}>`
      )
     .addField(
        "Support Link: ",
        `**[Click Here!](https://discord.gg/NQtZNcbVBc)**`,
        true
      )
      .addField(
        "Vote Link:",
        `**Soon!**`,
        true
      )
      .setTimestamp()
  .setFooter(
      "© Itadori",
      "https://media.discordapp.net/attachments/815004467979223040/817813789382410270/0e8ea2cf9e9a50a87464380a8d083295.jpg?width=676&height=676"
    )
      .setColor(config.embedcolor);
    
     let channel1 = await db.fetch(`chatbot_${message.guild.id}`);
    if(!channel1) return message.channel.send(embedd)
    var sChannel = message.guild.channels.cache.get(channel1);
    let embedvch = "<#" + sChannel.id + ">"
    
    const embed = new Discord.MessageEmbed()
    
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `**🤖 ChatBot Configuration** 

        **${emotes.info} Usage :**
         Type \`${emotes.info}setchatbotchannel\` - To Set a Channel 
         Type \`${emotes.info}disablechatbotchannel\` - To Disable a Channel.
         ChatBot Channel Set - ${embedvch} 

        **${emotes.info} Examples :**
         \`${config.prefix}setchatbotchannel\` <#${message.channel.id}>
         \`${config.prefix}disablechatbotchannel\` <#${message.channel.id}>`
                     )
     .addField(
        "Support Link: ",
        `**[Click Here!](https://discord.gg/NQtZNcbVBc)**`,
        true
      )
      .addField(
        "Vote Link:",
        `**Soon!**`,
        true
      )
      .setTimestamp()
  .setFooter(
      "© Itadori",
      "https://media.discordapp.net/attachments/815004467979223040/817813789382410270/0e8ea2cf9e9a50a87464380a8d083295.jpg?width=676&height=676"
    )
      .setColor(config.embedcolor);
    message.channel.send(embed);
  }
}
