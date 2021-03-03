const weather = require('weather-js')
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');
const emotes = require('../../configs/emotes.json')
const fetch = require('node-fetch')

module.exports = {
    config: {
        name: 'weather',
        description: 'Shows weather information',
        aliases: ["weather"],
        usage: '<city name>',
        accessableby: "",
    },
    run: async (client, message, args) => {

       if(args.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("Please enter a location!")
            .setColor(config.embedcolor)
            .setTimestamp()
                .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
          return message.channel.send(errorembed);
        }
        
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
          
        if(result.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("Please enter a vaild location!")
            .setColor(config.embedcolor)
            .setTimestamp()
                .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
          return message.channel.send(errorembed);
        }
        
          var current = result[0].current;
          var location = result[0].location;
            if (err) {
            let errorembed = new MessageEmbed()
            .setTitle("Error :cry:")
            .setDescription("Please enter a vaild location!")
            .setColor(config.embedcolor)
            .setTimestamp()
                .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
          return message.channel.send(errorembed);
            }
        
            
            let embed = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(config.embedcolor)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .setTimestamp()
                .setFooter(`© Kakashi `, "https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024")
            message.channel.send(embed)
        })
    }
}