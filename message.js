const Discord = require('discord.js');
const client = new Discord.Client();

exports.convert = function(msg) {
  //convert message to an array
  let array = ['']; let a = 0;
  for(item of msg.content) {
    if((item.charCodeAt(0) <= 126 && item.charCodeAt(0) >= 123) ||
       (item.charCodeAt(0) <= 96 && item.charCodeAt(0) >= 91)   ||
       (item.charCodeAt(0) <= 64 && item.charCodeAt(0) >= 58)   ||
       (item.charCodeAt(0) <= 47 && item.charCodeAt(0) >= 40)   ||
       (item.charCodeAt(0) <= 38 && item.charCodeAt(0) >= 34)   ||
       (item.charCodeAt(0) === 32)                                       ) {
         a++;
         array[a] = '';
       }
    else array[a] += item.charAt(0);
  }
  return array;
}
