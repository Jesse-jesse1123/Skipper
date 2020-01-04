//////////////////////////////////////////////////////////////
//  Title:        language.js                               //
//  Author:       Jake Roberts                              //
//  Created Date: 4/24/2019                                 //
//  Updated:	  6/4/2019				    //
//  Description:  Converts message to an array for easier   //
//                checking for language                     //
//  Dependencies:                                           //
//////////////////////////////////////////////////////////////

const Discord = require('discord.js');      //for Discord library
const client = new Discord.Client();        //for Discord client
const Lang = require('./Lang.js');

//                  msg, id, servLang, array
exports.langauge = (msg, servID, lang, array) => {
  if(msg.member.highestRole.hasPermission('KICK_MEMBERS')) return;

  for(item of lang)
    if(item.getID() === id) {
      let words = item.getWords();
      for(item2 of array)
        for(item3 of words) {
          if(item2 === item3){
            msg.delete().catch(console.error);
            msg.reply(`langauge! :rage:`);
            console.log("\nWarning:");
            console.group();
            console.log(`${msg.author.tag} -- ${msg.author.id}\nMessage: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`);
            console.groupEnd();
            return;
          }
          else continue;
        }
    }
    else continue;
  return;
}

exports.add = (msg, conMSG, servLang) => {
  if(!msg.member.highestRole.hasPermission('KICK_MEMBERS')) return;

  
}

exports.remove = () => {
  if(!msg.member.highestRole.hasPermission('KICK_MEMBERS')) return;


}

exports.reset = () => {
  if(!msg.member.highestRole.hasPermission('KICK_MEMBERS')) return;


}


/* PSUEDOCODE
 *
 *  export language function, pass in message, server ID, and server language array
 *    for each item in the array (array 1)
 *      if item class ID is equal to the ID the message was sent from:
 *        for each item in corresponding class' word array (array 2)
 *          if the message contains a word in array 2
 *            delete the message
 *            reply that language was found
 *            console log the warning
 *            return;
 */



/*
 * PROTOTYPE
 */
// exports.language = (msg, servID, lang, array) => {
//
//   for(let i = 0; i < lang.length(); i++) {
//
//     if(lang[i].getID() === msg.guild.id) {
//
//       let words = lang[i].getWords();
//
//       for(let j = 0; j < array.length(); j++) {
//         for(let k = 0; k < words.length(); k++) {
//
//           if(array[j] === words[k]) {
//             msg.delete().catch(console.error);
//             msg.reply(`langauge! :rage:`);
//             console.log("\nWarning:");
//             console.group();
//             console.log(`${msg.author.tag} -- ${msg.author.id}\nMessage: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`);
//             console.groupEnd();
//             return;
//
//           }
//         }
//
//       }
//
//     }
//     else continue;
//
//   }
//
// }



/*
 * ORIGINAL
 */
// exports.language = function(msg, array, badWords) {
//   //iterate through array checking for langauge
//   let found = false;
//   for(item of array) {
//     for(item2 of badWords) {
//       if(item === item2) {
//         msg.delete().catch(console.error);
//         msg.reply('Language!');
//         console.log("\nWarning:");
//         console.group();
//         console.log(`${msg.author.tag} -- ${msg.author.id}\nMessage: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`);
//         console.groupEnd();
//         found = true
//         break;
//       }
//       if(found === true) return;
//     }
//   }
// }
