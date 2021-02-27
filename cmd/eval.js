var Discord = require('discord.js');
const config = require('../config.json');
exports.run = async (client, message, args, utils, locale) => {
    if (!["674790908935536640"].includes(message.author.id)) return;

    try {
        var code = args.join(" ");
        let evaled = await eval(code);
        evaled = await clean(evaled);
        if (typeof evaled !== "string") {
            evaled = require("util").inspect(evaled);
        }
        message.channel.send(`\\✅ | The execution ended without problems`).then(() => {
            message.channel.send(evaled, {
                code: "js",
                split: "\n"
            });
        })
    } catch (err) {
        message.channel.send(`\\❌ | An error occurred during execution: \`\`\`js\n${err.stack}\n\`\`\``);
    }

}


module.exports.cfr = {
    name: "eval"
};