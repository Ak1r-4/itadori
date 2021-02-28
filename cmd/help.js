const Discord = require("discord.js");
const config = require('../config.json')
const emotes = require('../emotes.json')

module.exports.run = (client, message, args) => {
    var help = new Discord.MessageEmbed()
    .setAuthor('Help :')
    .setDescription(`Prefix : ${config.prefix}\n \`This bot is in the beta version
We are still adding new commands\`\n\n list of commands :`)
    .addField('**Utility**  🌏 :', '`avatar`, `serverinfo`, `neko`, `hug`, `pat`, `waifu`', true)
    .addField(`**NSFW**  ${emotes.nsfw} :`, '`4k`, `anal`, `ass`, `hentai`, `hkitsune`, `hneko`, `holo`, `kemonomimi`, `pussy`', true)
    .addField(`**Image**  ${emotes.image} :`, '`affect`, `rip`, `delete`, `beautiful`, `thomas`', true)
    .addField(`**Fun**  ${emotes.fun} :`, '`binary`, `clyde`, `comment`, `eject`, `emojify`, `github`, `iq`, `npm`, `osu`, `reddit`, `weather`, `zalog`, `meme`, `8ball`', true)
    .addField(`**Anime**  ${emotes.anime} :`, '`anime` [this command for search about animes]', true)
    .addField(`**Animals**  ${emotes.animals} :`, '`bird`, `cat`, `dog`, `duck`, `fox`, `shibe`, `dogfact`, `catfact`', true)
    .addField(`**info**  ${emotes.info} :`, '`help`, `botinfo`, `invite`, `ping`',true)
    .addField("**Server Support**", "[Click Here](https://discord.gg/NQtZNcbVBc)", true)
    .addField("**Vote**", "**Soon !**", true)
    .addField("Web Site ", "**Soon !**", true)
    .setColor(config.embedcolor)
    .setTimestamp()
    message.channel.send(help)
}
