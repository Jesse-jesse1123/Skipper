//////////////////////////////////////////////////////////////
//  Title:        readFile.js                               //
//  Author:       Jake Roberts                              //
//  Date:         4/24/2019                                 //
//  Updated:	  6/4/2019                                  //
//  Description:  welcomes users to the server              //
//  Dependencies: 	                                    //
//////////////////////////////////////////////////////////////

const DISCORD = require('discord.js');
const CLIENT = new DISCORD.Client();

exports.welcome = function(member) {
  const CHANNEL = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!CHANNEL) return;

  console.log(`User Joined\n\t${member}`);

  CHANNEL.send(`Welcome to the server, ${member}`);
}
