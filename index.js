
// PACKAGES

const Discord = require('discord.js');
const config = require('./configs/config.json');
const fs = require('fs');
const { Database } = require("quickmongo")
const db = new Database(config.database)
const http = require("http");
const path = require("path");
const express = require("express");
const chalk = require("chalk");
const moment = require("moment"); 
var Jimp = require("jimp");
const request = require("request");
const axios = require("axios");
const snekfetch = require("snekfetch");
const fetch = require("node-fetch");

// Handlers And Client

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.emotes = require('./configs/emotes.json')
client.filters = require('./configs/filters.json');

["aliases", "commands"].forEach(cmd => client[cmd] = new Discord.Collection());
["console", "command", "event"].forEach(events => require(`./handlers/${events}`)(client));

client.categories = fs.readdirSync('./commands');

// EVENTS

client.on('ready', () => {
    console.log('Karma Started!');
});

db.on("ready", () => {
    console.log("Database Connected!")
})
      client.on('ready', () => { //sasuke
	function randomStatus() {//sasuke
		let status = [//sasuke
			config.prefix + 'help',
			`School is Back :(`,
      `anime`
		];
		let rstatus = Math.floor(Math.random() * status.length);

		client.user.setActivity(status[rstatus], {
			type: 'PLAYING', status: "idle" 
		});
	}
	setInterval(randomStatus, 2000);

	console.log(`Hi, ${client.user.username} is now online!`);
});
//CHATBOT FEATURE 

client.on("message", async (message) => {
        let channel = await db.get(`chatbot_${message.guild.id}`);
     if(!channel) return;
        var sChannel = message.guild.channels.cache.get(channel);
     if (message.author.bot || sChannel.id !== message.channel.id) return;
     message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
     if (message.content.includes(`@`)) {
        return sChannel.send(`**:x: Please dont mention anyone**`);
     }
        sChannel.startTyping();
    if (!message.content) return sChannel.send("Please say something.");

    fetch(`https://api.deltaa.me/chatbot?message=${encodeURIComponent(message.content)}&name=${client.user.username}&user=${message.author.username}&gender=Male`)
   
    .then(res => res.json())
        .then(data => {
            sChannel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
        });
          sChannel.stopTyping();
              
    });

    client.snipes = new Map();

    client.on('messageDelete', function(message, channel){
    client.snipes.set(message.channel.id,{
        content:message.content,
        author:message.author.tag,
        image:message.attachments.first() ? message.attachments.first().proxyURL : null
})
});

client.login(config.token)
