const { PREFIX } = require('../../configs/config.json');
const moment = require('moment');
const chalk = require("chalk")

module.exports = async client => {
    let totalUsers = client.guilds.cache.reduce((users , value) => users + value.memberCount, 0);
    let totalGuilds = client.guilds.cache.size
    let totalChannels = client.channels.cache.size

    console.log(chalk.red`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Active, Commands Loaded!`);
    console.log(chalk.red`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Logged In!`);
      client.on('ready', () => { //sasuke
	function randomStatus() {//sasuke
		let status = [//sasuke
			PREFIX + 'help',
			`School is Back :(`,
      `anime`
		];
		let rstatus = Math.floor(Math.random() * status.length);

		client.user.setActivity(status[rstatus], {
			type: 'PLAYING', status: "dnd" 
		});
	}
	setInterval(randomStatus, 2000);

	console.log(`Hi, ${client.user.username} is now online!`);
});
    console.log(chalk.blue`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Now ` + totalChannels + ` channels, ` + totalGuilds + ` Servers and ` + totalUsers + ` serving  users!`);
}
