const Discord = require('discord.js');
const config = require('../../configs/config.json');
const db = require('quick.db')
const moment = require("moment")
require('moment-duration-format')
const emotes = require('../../configs/emotes.json');

module.exports = {
    config: {
        name: 'user',
        description: 'Shows information about user',
        aliases: ["whois", "userinfo"],
        usage: '<@user>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        let durumm;
        let durum = user.presence.status
        
        let roles = user.roles.cache.map(x => x).filter(z => z.name !== "@everyone")
        let messagecount = await db.get(`${message.guild.id}.${user.id}.messageCount`)
        
        if(!messagecount) messagecount = 0
        
        if(roles.length > 100) {
          roles = "There is so much roles to show."
        }
        
        let safe = message.author.createdTimestamp
        
        if(safe > 604800017) {
          safe = `\`Reliable\` ${emotes.success}` 
        } else {
          safe = `\`Suspicious\` ${emotes.error}` 
        }
        
        let a = {
          "DISCORD_PARTNER": `${emotes.discord_partner}`,
          "HYPESQUAD_EVENTS": `${emotes.hypesquad_events}`,
          "BUGHUNTER_LEVEL_1": `${emotes.bughunter_level_1}`,
          "HOUSE_BRAVERY": `${emotes.house_bravery}`,
          "HOUSE_BRILLIANCE": `${emotes.house_brilliance}`,
          "HOUSE_BALANCE": `${emotes.house_balance}`,
          "EARLY_SUPPORTER": `${emotes.early_supporter}`,
          "BUGHUNTER_LEVEL_2": `${emotes.bughunter_level_2}`,
          "VERIFIED_DEVELOPER": `${emotes.verified_developer}`,
          "VERIFIED_BOT": `${emotes.verified_bot}`,
        }
        
          if(durum === "online") durumm = `Online ${emotes.online}`
          if(durum === "offline") durumm = `Offline ${emotes.offline} `
          if(durum === "idle") durumm = `Idle ${emotes.idle}`
          if(durum === "dnd") durumm = `Do not disturb ${emotes.dnd}`
          
          let lastMessage
          let lastMessageTime
          let nitroBadge = user.user.avatarURL({dynamic: true})
          let flags = user.user.flags.toArray().join(``)
          
          if(!flags) {
            flags = "User doesn't have any badge"
          }
        
         flags = flags.replace("HOUSE_BRAVERY", `• ${emotes.house_bravery}\`HypeSquad Bravery\``)
         flags = flags.replace("EARLY_SUPPORTER",`• ${emotes.early_supporter} \`Early Supporter\``)
         flags = flags.replace("VERIFIED_DEVELOPER",`• ${emotes.verified_developer}\`Verified Bot Developer\``)
         flags = flags.replace("EARLY_VERIFIED_DEVELOPER",`• ${emotes.verified_developer} \`Verified Bot Developer\``)
         flags = flags.replace("HOUSE_BRILLIANCE",`• ${emotes.house_brilliance} \`HypeSquad Brilliance\``)
         flags = flags.replace("HOUSE_BALANCE",`• ${emotes.house_balance}\`HypeSquad Balance\``)
         flags = flags.replace("DISCORD_PARTNER",`• ${emotes.discord_partner} \`Partner\``)
         flags = flags.replace("HYPESQUAD_EVENTS",`• ${emotes.hypesquad_events}\`Hypesquad Event\``)
         flags = flags.replace("DISCORD_CLASSIC",`• ${emotes.nitro} \`Discord Classic\``)
      
          if(nitroBadge.includes("gif")) {
           flags = flags + `
      • ${emotes.nitro_boost}  \`Nitro\``
          }
          
          let voice = db.get(`${message.guild.id}.${user.user.id}.voicetime`)
          let stat =  user.presence.activities[0]
          let custom
          
        if(user.presence.activities.some(r => r.name === "Spotify")) {
           custom = "Listening to Spotify"
         } else if(stat && stat.name !== "Custom Status") {
           custom = stat.name
         } else {
           custom = "Nothing"
         }
      
          if(user.presence.activities.some(r => r.name !== "Spotify") && stat && stat.state !== null) {
            stat = stat.state
          } else {
            stat = "Nothing"
          }
         
          
          if(!voice) {
            voice = "0 hours, 0 minutes and 0 seconds"
          } else {
            voice = moment.duration(voice).format("h [ hours,] m [ minutes and] s[ seconds]")
          }
      
         if(user.lastMessage) {
           lastMessage = user.lastMessage.content
           lastMessageTime = moment(user.lastMessage.createdTimestamp).format('MMMM Do YYYY, H:mm:ss a')
         } else {
           lastMessage = "None"
           lastMessageTime = "None"
         }
          
          const embeddd = new Discord.MessageEmbed()
          .setColor(config.embedcolor)
          .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
          .setDescription(`__**User Info**__
      **•** \`ID:\` **${user.id}**
      **•** \`User:\` **${user}**
      **•** \`Bot:\` **${user.user.bot ? 'Yes' : 'No'}**
      **•** \`Created At:\` **${moment(user.user.createdAt).format('MMMM Do YYYY, H:mm:ss a')}**
      __**Member Info**__
      **•** \`Nickname:\` **${user.displayName ? user.displayName : 'yok'} **
      **•** \`Joined At:\` **${moment(user.joinedAt).format('MMMM Do YYYY, H:mm:ss a')}**
      **•** \`Activity:\` **${custom}**
      __**Roles:**__
      ${roles}
      __**Messages Info**__
      **•** \`Last Message:\` **${lastMessage}**
      **•** \`Last Message At:\` **${lastMessageTime}**
      **•** \`Message's Count:\` **${messagecount}**
      __**Badge Information**__
      ${flags} 
      
      __**Safety Check**__
      • ${safe}`)
          .setThumbnail(user.user.avatarURL({dynamic: true}))
          .setTimestamp()
 .setFooter( "© Itadori","https://media.discordapp.net/attachments/815004467979223040/817813789382410270/0e8ea2cf9e9a50a87464380a8d083295.jpg?width=676&height=676")
      message.react ('755471130315194399')
          message.channel.send(embeddd)

    }
}
