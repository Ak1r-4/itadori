var { exec } = require('child_process');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
        if (!["674790908935536640"].includes(message.author.id)) return message.channel.send(": x: You don't have permission to do this command! <Uty Developer>");

    exec(`${args.join(' ')}`, (error, stdout) => {
        var response = (error || stdout);
        if (!error) message.channel.send(`\\✅ | The execution ended without problems :`);
        else message.channel.send(`\\❌ | An error occurred during execution:`);
        message.channel.send(`${response}`, {
            code: "js",
            split: "\n"
        }).catch(e => console.log(e));
    });
}

module.exports.cfr = {
    name: "exec"
}