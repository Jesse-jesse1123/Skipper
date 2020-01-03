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


exports.language = (msg, servID, lang) => {



}

/*  export language function, pass in message, server ID, and server language array
 *    for each item in the array (array 1)
 *      if item class ID is equal to the ID the message was sent from:
 *        for each item in corresponding class' word array (array 2)
 *          if the message contains a word in array 2
 *            delete the message
 *            reply that language was found
 *            console log the warning
 *            return;
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
