const Discord = require('discord.js');
const config = require('../config.json');
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const emotes = require('../emotes.json')

 module.exports.run = async (client, message, args) => {

 const name = args.join(' ');
		if (!name) {
			return message.channel.send(
			`${emotes.error}  Please provide a valid user`,
			);
		}

		const url = `https://api.github.com/users/${name}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				`${emotes.error} An error occured, please try again!`,
			);
		}

		try{
			const embed = new Discord.MessageEmbed()
				.setColor(config.embedcolor)
				.setTitle(`${response.login} (${response.id})`)
				.setDescription(response.bio ? response.bio : 'None')
				.addFields(
					{ name: '》 Followers', value: `\`\`\`${response.followers.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Following', value: `\`\`\`${response.following.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Repositories', value: `\`\`\`${response.public_repos.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Email', value: `\`\`\`${response.email ? response.email : 'None'}\`\`\`` },
					{ name: '》 Company', value: `\`\`\`${response.company ? response.company : 'None'}\`\`\`` },
					{ name: '》 Location', value: `\`\`\`${response.location ? response.location : 'None'}\`\`\`` },
				)
				.setURL(response.html_url)
				.setThumbnail(response.avatar_url)
				.setFooter('© Kakashi', 'https://cdn.discordapp.com/avatars/807734261901820004/03d30e04f9c3e1ecb7a865d3cb7c859c.png?size=1024')
        		.setTimestamp();

			message.channel.send(embed);
		}
		catch (err) {
			return message.channel.send(
				`${emotes.error} Please provide a valid user`,
			);
		}
    }