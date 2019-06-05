//////////////////////////////////////////////////////////////
//  Title:        message.js                                //
//  Author:       Jake Roberts                              //
//  Created Date: 4/24/2019                                 //
//  Updated:      6/4/2019                                  //
//  Description:  converts messages sent to arrays for      //
//                easier handling                           //
//  Dependencies: 	                                    //
//////////////////////////////////////////////////////////////

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

/* include discord library
 * create new client class
 *
 * initialize exported 'convert' function
 * 	initialize an empty array then variable 'a' as 0
 * 	iterate through each message string index
 * 		if
 * 		  ASCII value is <= 126 and >= 123 or
 * 		  ASCII value is <= 96 and >= 91 or
 * 		  ASCII value is <= 64 and >= 58 or
 * 		  ASCII value is <= 47 and >= 40 or
 * 		  ASCII value is <= 38 and >= 34 or
 * 		  ASCII value is equal to 32
 * 			increment variable 'a' up by one
 * 			array at index 'a' equals ''
 * 		otherwise add character at item index 0 to array at index 'a'
 * 	return the array
 * 
 *
 * 	ASCII values equivalents:
 * 	     126 - 123: ~ } | {
 * 	     96 - 91:   ` _ ^ ] \ [
 * 	     64 - 58:   @ ? > " < ; :
 * 	     47 - 40:   / . - , + * ) (
 * 	     38 - 34:   & % $ # "
 * 	     32:        <SPACE>
 */
