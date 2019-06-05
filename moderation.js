//////////////////////////////////////////////////////////////
//  Filename: 	  moderation.js				    //
//  Author: 	  Jake Roberts				    //
//  Date:	  TBD					    //
//  Updated:	  6/4/2019				    //
//  Description:  Used for execution of moderation actions  //
//  Dependencies: Discord.js library			    //
//////////////////////////////////////////////////////////////

const Discord = require('discord.js');         //for Discord library
const client = new Discord.Client();           //for Discord client

//deletes the number of messages specified
exports.delete1 = function(msg, num) {

}

//deletes a specified number of messages sent by a user
exports.delete2 = function(msg, ID, num) {
  console.log("delete2 was run\n\n");
}

//kicks member
exports.kick = function(msg) {
  console.log("kick was run\n\n");

  const user = msg.mentions.users.first();
  console.log(user);

  if(!msg.member.highestRole.hasPermission('KICK_MEMBERS')) { msg.reply(`you can't user that command!`); }
  else {
    const member = msg.guild.member(user);
    if(member) {
      member.kick({ reason: "" })
      .then(() => { msg.reply(`Successfully kicked <@${user.tag}>!`); })
      .catch(err => {msg.reply(`I couldn't ban that person!`); console.err(err); });
    }
    else { msg.reply(`that person isn't in the server!`); }
  }
}

//bans, then unbans user (essentially kicks and deletes messages)
exports.softban = function(msg) {
  console.log("softban was run\n\n");
}

//bans member
exports.ban = function(msg, ID) {
  const user = msg.mentions.users.first();
  console.log(user);

  if(!msg.member.highestRole.hasPermissions('BAN_MEMBERS')) { msg.reply(`you can't use that command!`); }
  else{
    const member = msg.guild.member(user);
    if(member) {
      member.ban(7, { reason:"" })
      .then(() => { msg.reply(`Successfully banned <@${user.tag}>!`); })
      .catch(err => { msg.reply(`I couldn't ban that person!`); console.error(err); });
    }
    else { msg.reply(`That person isn't in the server!`); }
  }
}

//unbans member
exports.unban = function(msg) {
  console.log("unban was run\n\n");
}

//PSUEDOCODE
/* aquire Discord JS library
 * create new client object
 *
 * export delete1 function with passed values of the message object and a the number of messages to be deleted
 * 	empty for now
 *
 * export delete2 function with passed values of the message object, user ID, and number of messages to be deleted
 *
 * export kick function with passed value of message object
 * 	log in console "kick was run"
 *
 * 	if the message author's highest role does not have the kick members permission, reply "you can't use that command"
 * 	otherwise
 * 		initialize `member` variable (const) as the first user mentioned
 * 		log in console the user mentioned
 *		if `member` variable exists
 *			kick the user with an empty reason
 *			then reply to message author that user was successfully kicked
 *			if there's an error, reply to message author that the user couldn't be kicked and log error in console
 *		otherwise reply to message author that the person isn't in the server
 *
 * export softban function with passed value of message object
 * 	log in console "softban was run"
 * 	TO BE UPDATED LATER WITH CODE
 *
 * export ban function with passed values of message object and user ID
 * 	code same as kick function, but with 'ban' written in places where 'kick' is written
 * 	and message author highest role permissions can ban members
 *
 * export unban function with passed value of message object
 * 	log in console that unban function was run
 * 	TO BE UPDATED LATER WITH CODE
 */
