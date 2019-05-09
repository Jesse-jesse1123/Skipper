const Discord = require('discord.js');         //for Discord library
const client = new Discord.Client();           //for Discord client

//deletes the number of messages specified
exports.delete1 = function(msg, num) {
  console.log("delete1 was run\n\n");
}

//deletes a specified number of messages sent by a user
exports.delete2 = function(msg, ID, num) {
  console.log("delete2 was run\n\n");
}

//kicks member
exports.kick = function(msg) {
  console.log("kick was run\n\n");
}

//bans, then unbans user (essentially kicks and deletes messages)
exports.softban = function(msg) {
  console.log("softban was run\n\n");
}

//bans member
exports.ban = function(msg, ID) {
  console.log("ban was run\n\n");
}

//unbans member
exports.unban = function(msg) {
  console.log("unban was run\n\n");
}
