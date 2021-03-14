const {MessageAttachment} = require('discord.js');
const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const AmeClient = require('amethyste-api');
const ameAPI = new AmeClient(config.ameAPI);
module.exports = {
    config: {
        name: 'gay',
        description: 'colors your avatar to rainbow flag',
        aliases: ["gay"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
         let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await ameAPI.generate("gay", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "gay.png");
        m.delete({ timeout: 300 });
        message.channel.send(attachment);

  }
}
