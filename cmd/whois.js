/*
const Discord = require("discord.js");
const config = require('../config.json')
const emotes = require('../emotes.json')
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { stripIndent } = require('common-tags');


const statuses = {
  online: `${emotes.online} \`Online\``,
  idle: `${emotes.idle} \`AFK\``,
  offline: `${emotes.offline} \`Offline\``,
  dnd: `${emotes.dnd} \`Do Not Disturb\``
};
const flags = {
  DISCORD_EMPLOYEE: `${emotes.discord_staff} \`Discord Employee\``,
  DISCORD_PARTNER: `${emotes.discord_partner} \`Partnered Server Owner\``,
  BUGHUNTER_LEVEL_1: `${emotes.bughunter_level_1} \`Bug Hunter (Level 1)\``,
  BUGHUNTER_LEVEL_2: `${emotes.bughunter_level_2} \`Bug Hunter (Level 2)\``,
  HYPESQUAD_EVENTS: `${emotes.hypesquad_events} \`HypeSquad Events\``,
  HOUSE_BRAVERY: `${emotes.house_bravery} \`House of Bravery\``,
  HOUSE_BRILLIANCE: `${emotes.house_brilliance} \`House of Brilliance\``,
  HOUSE_BALANCE: `${emotes.house_balance} \`House of Balance\``,
  EARLY_SUPPORTER: `${emotes.early_supporter} \`Early Supporter\``,
  TEAM_USER: 'Team User',
  SYSTEM: 'System',
  VERIFIED_BOT: `${emotes.verified_bot} \`Verified Bot\``,
  VERIFIED_DEVELOPER: `${emotes.verified_developer} \`Early Verified Bot Developer\``
};

module.exports.run = async (client, message, args) => {
  
    const member =  this.getMemberFromMention(message, args[0]) ||message.guild.members.cache.get(args[0]) || 
      message.member;
    const userFlags = (await member.user.fetchFlags()).toArray();
    const activities = [];
    let customStatus;
    for (const activity of member.presence.activities.values()) {
      switch (activity.type) {
        case 'PLAYING':
          activities.push(`Playing **${activity.name}**`);
          break;
        case 'LISTENING':
          if (member.user.bot) activities.push(`Listening to **${activity.name}**`);
          else activities.push(`Listening to **${activity.details}** by **${activity.state}**`);
          break;
        case 'WATCHING':
          activities.push(`Watching **${activity.name}**`);
          break;
        case 'STREAMING':
          activities.push(`Streaming **${activity.name}**`);
          break;
        case 'CUSTOM_STATUS':
          customStatus = activity.state;
          break;
      }
    }
    
    // Trim roles
    let roles = message.client.utils.trimArray(member.roles.cache.array().filter(r => !r.name.startsWith('#')));
    roles = message.client.utils.removeElement(roles, message.guild.roles.everyone)
      .sort((a, b) => b.position - a.position).join(' ');
    
    const embed = new MessageEmbed()
      .setTitle(`${member.displayName}'s Information`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .addField('User', member, true)
      .addField('Discriminator', `\`#${member.user.discriminator}\``, true)
      .addField('ID', `\`${member.id}\``, true)
      .addField('Status', statuses[member.presence.status], true)
      .addField('Bot', `\`${member.user.bot}\``, true)
      .addField('Color Role', member.roles.color || '`None`', true)
      .addField('Highest Role', member.roles.highest, true)
      .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
      .addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
      .addField('Roles', roles || '`None`')
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(member.displayHexColor);
    if (activities.length > 0) embed.setDescription(activities.join('\n'));
    if (customStatus) embed.spliceFields(0, 0, { name: 'Custom Status', value: customStatus});
    if (userFlags.length > 0) embed.addField('Badges', userFlags.map(flag => flags[flag]).join('\n'));
    message.channel.send(embed);
}
*/