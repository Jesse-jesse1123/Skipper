//////////////////////////////////////////////////////////////
//  Filename: 	  moderation.js				    //
//  Author: 	  Jake Roberts				    //
//  Date:	  TBD					    //
//  Updated:	  6/4/2019				    //
//  Description:  Used for execution of moderation actions  //
//  Dependencies: Discord.js library			    //
//////////////////////////////////////////////////////////////

const DISCORD = require('discord.js');         //for Discord library
const CLIENT = new DISCORD.Client();           //for Discord client

//deletes the number of messages specified
exports.delete1 = function(msg, num, MSGINFO) {
  console.log(`Request:\n`);
	console.group();
		console.log(`${MSGINFO}Delete1`);
		console.log(`Message: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`);
	console.groupEnd();
}

//deletes a specified number of messages sent by a user
exports.delete2 = function(msg, ID, num, MSGINFO) {
	console.log(`Request:\n`);
	console.group();
		console.log(`${MSGINFO}Delete2`);
		console.log(`Message: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`);
	console.groupEnd();
}

//kicks member
exports.kick = function(msg, MSGINFO) {
  console.log("kick was run\n\n");

  const USER = msg.mentions.users.first();
  console.log(USER);

  if(!msg.member.highestRole.hasPermission('KICK_MEMBERS')) { msg.reply(`you can't use that command!`); }
  else {
    const MEMBER = msg.guild.member(USER);
    if(MEMBER) {
      MEMBER.kick({ reason: "" })
      .then(() => { msg.reply(`Successfully kicked <@${USER.tag}>!`); })
      .catch(err => {msg.reply(`I couldn't ban that person!`); console.err(err); });
    }
    else { msg.reply(`that person isn't in the server!`); }
  }


}

//bans, then unbans user (essentially kicks and deletes messages)
exports.softban = function(msg) {
  const USER = msg.mentions.users.first();
  console.log("softban was run\n\n");

  if(!msg.member.highestRole.hasPermission('BAN_MEMBERS') || !msg.guild.owner) { msg.reply(`you cna't use that command!`); }
  else {
    const MEMBER = msg.guild.member(USER);
    if(MEMBER) {
      msg.guild.ban(USER, 7, {reason:""})
      .then(msg.guild.unban(USER.id))
      .then(() => { msg.reply(`Successfully softbanned ${USER.tag}!`); })
      .catch(err => { msg.reply(`I couldn't softban that person!`); console.error(err); });
    }
    else {msg.reply(`That person isn't in ther server!`); }
  }
}

//bans member
exports.ban = (msg) => {
  const USER = msg.mentions.users.first();
  console.log(USER);

  if(!msg.member.highestRole.hasPermission('BAN_MEMBERS') || !msg.guild.owner) { msg.reply(`you can't use that command!`); }
  else{
    const MEMBER = msg.guild.member(USER);
    if(MEMBER) {
      guild.ban(USER.id, 7, { reason:"" })
      .then(() => { msg.reply(`Successfully banned ${USER.tag}!`); })
      .catch(err => { msg.reply(`I couldn't ban that person!`); console.error(err); });
    }
    else { msg.reply(`That person isn't in the server!`); }
  }
}

//unbans member
exports.unban = function(msg) {
  const USER = msg.mentions.users.first();
  console.log(USER);

  if(!msg.member.highestRole.hasPermission('BAN_MEMBERS') || !msg.guild.owner) { msg.reply(`you can't use that command!`); }
  else{
    const MEMBER = msg.guild.member(USER);
    if(MEMBER) {
      msg.guild.unban(USER.id)
      .then(() => { msg.reply(`Successfully unbanned ${USER.tag}!`); })
      .catch(err => { msg.reply(`I couldn't unban that person!`); console.error(err); });
    }
    else { msg.reply(`Something went wrong and I couldn't unban that person!`); }
  }
}
