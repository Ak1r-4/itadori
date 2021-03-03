const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { Database } = require("quickmongo")
const db = new Database(config.database)

module.exports = {
    config: {
        name: '',
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
        `**[Click Here!](https://discord.gg/NtyaM9d)**`,
        true
      )
      .addField(
        "Vote Link:",
        `**[Click Here!](https://top.gg/bot/636484020301201418/vote)**`,
        true
      )
      .setTimestamp()
      .setFooter(
        "© Karma",
        "https://cdn.discordapp.com/attachments/725019921159028808/739770316754256012/Screenshot_20200803-1459592.png"
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
        `**[Click Here!](https://discord.gg/NtyaM9d)**`,
        true
      )
      .addField(
        "Vote Link:",
        `**[Click Here!](https://top.gg/bot/636484020301201418/vote)**`,
        true
      )
      .setTimestamp()
      .setFooter(
        "© Karma",
        "https://cdn.discordapp.com/attachments/725019921159028808/739770316754256012/Screenshot_20200803-1459592.png"
      )
      .setColor(config.embedcolor);
    message.channel.send(embed);
  }
}