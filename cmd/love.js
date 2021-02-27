const config = require('../config.json')
const emotes = require('../emotes.json')
const { MessageEmbed } = require('discord.js');


module.exports.run = (client, message, args) => {

      if (!message.mentions.users.size === 0) return message.channel.send("You have to mention two people !")
    let user1 = args[0];
    let user2 = args[1];
    if (!args[0] || args[0 == "null"]) return message.reply("You have to mention two people !");
    if (!args[1] || args[1 == "null"]) return message.reply("You have to mention two people !");
    let number = Math.floor(Math.random() * 99) + 1;
    let loveplusembed = new MessageEmbed()
    .setTitle("Love")
    .setDescription(`Love test`)
    .addField("Membres", `${user1} + ${user2}`)
    .addField("Result", `${number}% :two_hearts:`)
    .setColor(config.embedcolor)
    .setImage("https://i.imgur.com/RAwPNKH.png")
    if (number > 90) return message.channel.send(loveplusembed), message.delete().catch();

    let loveembed = new MessageEmbed()
    .setTitle("Love")
    .setDescription(`Love test`)
    .addField("Membres", `${user1} + ${user2}`)
    .addField("Result", `${number}% :heart:`)
    .setColor(config.embedcolor)
    if (number < 90) return message.channel.send(loveembed), message.delete().catch();

    console.log(`Commande ${message.author.lastMessage} executé sur le serveur ${message.guild.name} dans le salon ${message.channel.name} par le membre ${message.author.username} le ${message.createdAt}`)
    
}
