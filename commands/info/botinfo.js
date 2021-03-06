const Discord = require("discord.js");
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const pkg = require("../../package.json");
const {version} = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    config: {
        name: 'botinfo',
        description: 'Information about bot',
        aliases: ["info"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let platform;
    let build;

    if (process.platform === "Win") {
        platform = "Windows";
        build = "Development";
    } else if (process.platform === "Linux") {
        platform = process.platform;
        build = "Production";
    } else {
        platform = process.platform;
        build = "Inconnu"
    }

    let Avatarbot = client.user.displayAvatarURL;
    let embed = new Discord.MessageEmbed()
    .setTitle(client.user.username)
    //.setAuthor(bot.user.username)
    .setThumbnail(Avatarbot)
    .setColor(config.embedcolor)
    .setDescription("help to display the commands")
    .addField("❯ kakashi", `v${pkg.version}`)
    .addField("❯ Site web", "[here](http://www.itadoribot1.ga/)")
    .addField("❯ Discord.js", `v${version}`)
    .addField("❯ Node.js", `${process.version}`)
    .addField("❯ Platform", `${platform}`)
    .addField("❯ RAM Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("❯ Uptime", `${duration}`)
    .addField("❯ Servers", `${client.guilds.cache.size}`)
    .addField("❯ Developer", "<@674790908935536640>")
    .addField("❯ Created the", client.user.createdAt)
    .setURL("https://discord.gg/NQtZNcbVBc")
    .setFooter(`Asked by${message.author.username}`)
    .setTimestamp()
    message.channel.send(embed);
    message.delete().catch();

    console.log(`command ${message.author.lastMessage} executed on the server ${message.guild.name} in the living room ${message.channel.name} by the member ${message.author.username} le ${message.createdAt}`)
    
    }
}
