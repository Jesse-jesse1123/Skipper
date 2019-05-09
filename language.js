//////////////////////////////////////////////////////////////
//  Title:        language.js                               //
//  Author:       Jake Roberts                              //
//  Date:         4/24/2019                                 //
//  Description:  Converts message to an array for easier   //
//                checking for language, then iterates      //
//                through the array and checking for said   //
//                language.                                 //
//  Dependencies:                                           //
//////////////////////////////////////////////////////////////

const Discord = require('discord.js');      //for Discord library
const client = new Discord.Client();        //for Discord client

exports.language = function(msg, array, badWords) {
  //iterate through array checking for langauge
  let found = false;
  for(item of array) {
    for(item2 of badWords) {
      if(item === item2) {
        msg.delete().catch(console.error);
        msg.reply('Language!');
        console.log("\nWarning:");
        console.group();
        console.log(`${msg.author.tag} -- ${msg.author.id}\nMessage: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`);
        console.groupEnd();
        found = true
        break;
      }
      if(found === true) return;
    }
  }
}
