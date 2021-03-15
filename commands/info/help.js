const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const { embedcolor } = require("../../configs/config.json");
const { prefix } = require('../../configs/config.json');

module.exports = {
        config: {
            name: "help",
            aliases: ["h"],
            usage: "[command name] (optional)",
            category: "info",
            description: "Displays all commands that the karma has.",
            accessableby: "everyone"
        },
        run: async (client, message, args) => {
    var embed = new Discord.MessageEmbed()
                .setColor(embedcolor)
                .setAuthor(`${message.guild.name}`, message.guild.iconURL())
                .setThumbnail(client.user.displayAvatarURL())
 if (!args[0]) {

    embed.addField('**General**  🌏 :', '`avatar`, `serverinfo`, `user`, `neko`, `hug`, `pat`, `wink`', true)
    embed.addField(`**NSFW**  ${emotes.nsfw} :`, '`4k`, `anal`, `ass`, `hentai`, `hkitsune`, `hneko`, `holo`, `kemonomimi`, `pussy`', true)
    embed.addField(`**Image**  ${emotes.image} :`, '`affect`, `rip`, `delete`, `beautiful`, `thomas`', true)
    embed.addField(`**ChatBot**  ${emotes.chatbot} :`, '`chatbot`, `disableChatbotchannel`, `setChatbotchannel`', true)
    embed.addField(`**Fun**  ${emotes.fun} :`, '`binary`, `clyde`, `comment`, `eject`, `emojify`, `github`, `iq`, `npm`, `osu`, `reddit`, `weather`, `meme`, `8ball`', true)
    embed.addField(`**Anime**  ${emotes.anime} :`, '`anime` [this command for search about animes]', true)
    embed.addField(`**Animals**  🐾 :`, '`bird`, `cat`, `dog`, `duck`, `fox`, `shibe`, `dogfact`, `catfact`', true)
    embed.addField(`**info**  ${emotes.info} :`, '`help`, `botinfo`, `invite`, `ping`',true)
    embed.addField("**Server Support**", "**[Click Here](https://discordapp.com/invite/M4CUn7N6Tj)**", true)
    embed.addField("**Vote**", "**Soon !**", true)
    embed.addField("Web Site ", "**[Click Here](http://www.itadoribot1.ga/)**", true)
    embed.setFooter(`for more help type ${prefix}help <commandName>`)
    .setTimestamp()
   return message.channel.send(embed)
 } else
          {
                let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
                if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
                command = command.config

                embed.setDescription(stripIndents`**itadori Prefix Is \`${prefix}\`**\n
                ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
                ** Description -** ${command.description || "No Description provided."}\n
                ** Usage -** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}\n
                ** Needed Permissions -** ${command.accessableby || "everyone can use this command!"}\n
                ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
                embed.setFooter(message.guild.name, message.guild.iconURL())

                return message.channel.send(embed)
            }
        }
    };
