const Discord = require('discord.js');
const client = new Discord.Client();

exports.welcome = function(member) {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;

  console.log(`User Joined\n\t${member}`);

  channel.send(`Welcome to the server, ${member}`);
}
