/// ///////////////////////////////////////////////////////////
//  Title:        message.js                                //
//  Author:       Jake Roberts                              //
//  Created Date: 4/24/2019                                 //
//  Updated:      6/4/2019                                  //
//  Description:  converts messages sent to arrays for      //
//                easier handling                           //
//  Dependencies:                                           //
/// ///////////////////////////////////////////////////////////

// const Discord = require('discord.js')
// const client = new Discord.Client()
const sanitizeRegex = /\W/

exports.convert = function (msg) {
  return msg.content.map(contentLine => contentLine.replaceAll(sanitizeRegex, ''))
}
