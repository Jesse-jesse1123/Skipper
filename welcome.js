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

//PSUEDOCODE
/* acquire Discord JS library
 * create new client object
 *
 * export welcome function with passed value of memeber
 * 	create 'channel' variable and intialize it as the 'welcome' channel
 * 	if channel doesn't exist, return
 *
 * 	log in console "User joined", NEWLINE > variable 'member'
 *
 * 	send message to the welcome channel "Welcome to the server" and mentions the member joined
 */
