const Discord = require('discord.js');
const config = require('../config.json');
const { MessageEmbed } = require('discord.js')
const emotes = require('../emotes.json')
const fetch = require('node-fetch')
const osu = require('node-osu');
const api = new osu.Api("85842912bd27a41e4474c36868bd9b92605c61b0" , {
// END OF OSU API KEY
    notFoundAsError: true,
    completeScores: false 
})

 module.exports.run = async (client, message, args) => {

  let username = args[0]
  
  
if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')

api.getUser({u: username}).then(user => {
const osu = new Discord.MessageEmbed()
.setTitle(`<:osu:815037669050155078> User Osu Search System`)
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.setColor(config.embedcolor)
.addField('》`Nickname:`', user.name)
.addField('》`PP:`', Math.round(user.pp.raw))
.addField('》`Rank:`', user.pp.rank)
.addField('》`Level:`', Math.round(user.level))
.addField('》`Score:`', user.scores.ranked)
.addField('》`Country:`', user.country)
.addField('》`Country Rank:`', user.pp.countryRank)
.addField('》`Playcount:`', user.counts.plays)
.addField('》`Accuracy:`', `${user.accuracyFormatted}`)
.setTimestamp()
    .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
console.log(user)
message.channel.send(osu)
})

    }