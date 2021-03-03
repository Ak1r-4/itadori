const DIG = require("discord-image-generation");
const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
 module.exports = {
    config: {
        name: 'beautiful',
        description: 'This is Beautiful!',
        aliases: ["beautiful"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {


   let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m = await message.channel.send("**Please Wait...**");   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Beautiful().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "delete.png");
    m.delete({ timeout: 1000 });
    message.channel.send(attach);
  }
 }