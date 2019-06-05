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


/* file header with pertinent information
 *
 * acquire Discord library
 * initialize client object
 *
 * initialize export function
 * 	initialize boolean variable as 'false'
 * 	iterate through each item of the passed in array
 * 	    iterate through each item of the passed in badWords array
 * 	        if the first item is equal to the second item
 * 	        	delete the message, or throw a console error if it can't
 * 	        	reply to the message author "Language!"
 * 	        	log in console "Warning"
 * 	        	CONSOLE LOG GROUP START
 * 	        		log in console the message author tag (Example#0000), message author ID (17-18 digit #), NEWLINE > message content, NEWLINE > message timestamp
 * 	        	CONSOLE LOG GROUP END
 * 	        	set `found` variable to `true`
 * 	        	break the loop
 * 	        if `found` variable equals `true`, return nothing
 */
