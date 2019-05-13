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
      member.ban({ reason: "" })
      .then(() => { msg.reply(`Successfully banned <@${user.tag}>!`); })
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
