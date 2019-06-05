//////////////////////////////////////////////////////////////
//  Title:        readFile.js                               //
//  Author:       Jake Roberts                              //
//  Date:         4/24/2019                                 //
//  Updated:	  6/4/2019                                  //
//  Description:  welcomes users to the server              //
//  Dependencies: 	                                    //
//////////////////////////////////////////////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

exports.welcome = function(member) {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;

  console.log(`User Joined\n\t${member}`);

  channel.send(`Welcome to the server, ${member}`);
}
