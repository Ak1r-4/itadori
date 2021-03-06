const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
module.exports = {
    config: {
        name: 'invite',
        description: 'to invite me ',
        aliases: ["inv"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    

const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**Kakashi Bot ** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/oauth2/authorize?client_id=807734261901820004&scope=bot&permissions=1412955263) to Invite me!\nThanks for supporting me.** <a:Heart:813359786782883851> "
    )
    .addField("**Server Support**", "[Click Here](https://discord.gg/NQtZNcbVBc)", true)
    .addField("**Vote**", "**Soon !**", true)
    .addField("Web Site ", "**[here](http://www.itadoribot1.ga/)**", true)
    .setColor(config.embedcolor);
    message.channel.send(embed)
    
    }
}
