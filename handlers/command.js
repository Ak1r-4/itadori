
const fs = require('fs');

module.exports = (client) => {
    const load = dirs => {
        const commands = fs.readdirSync(`./commands/${dirs}/`).filter(cmd => cmd.endsWith('.js'));
        for (let cmd of commands) {
            let pull = require(`../commands/${dirs}/${cmd}`);
            client.commands.set(pull.config.name, pull);
            if (pull.config.aliases) pull.config.aliases.forEach(cmd => client.aliases.set(cmd, pull.config.name));
        };
    };
    ["animals", "info", "anime", "nsfw", "image", "chatbot", "fun", "general"].forEach(cmd => load(cmd));
};
