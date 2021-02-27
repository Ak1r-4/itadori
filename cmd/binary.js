const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../config.json');
const axios = require('axios')

 module.exports.run = async (client, message, args) => {

   const url = `http://some-random-api.ml/binary?text=${args}`;

  let response, data;
  try {
    response = await axios.get(url);
    data = response.data;
  } catch (e) {
    return message.channel.send(`An error occured, please try again!`);
  }

  const embed = new MessageEmbed()
    .setTitle("Text to Binary")
    .setThumbnail(
      "https://png.pngtree.com/png-clipart/20200225/original/pngtree-binary-code-and-magnifying-glass-isometric-icon-png-image_5252004.jpg"
    )

    .setDescription("**Binary Code** - `" + data.binary + "`")
    .setTimestamp()
    .setFooter(
      "© Kakashi",
      "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.webp?size=1024"
    )
    .setColor(config.embedcolor);

  await message.channel.send(embed);

    }