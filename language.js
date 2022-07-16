/// ///////////////////////////////////////////////////////////
//  Title:        language.js                               //
//  Author:       Jake Roberts                              //
//  Created Date: 4/24/2019                                 //
//  Updated:    6/4/2019            //
//  Description:  Converts message to an array for easier   //
//                checking for language                     //
//  Dependencies:                                           //
/// ///////////////////////////////////////////////////////////

// const Discord = require('discord.js') // for Discord library
// const client = new Discord.Client() // for Discord client

exports.language = function(msg, array, badWords) {
  // iterate through array checking for langauge
  let found = false
  for (const item of array) {
    for (const item2 of badWords) {
      if (item === item2) {
        msg.delete().catch(console.error)
        msg.reply('Language!')
        console.log('\nWarning:')
        console.group()
        console.log(`${msg.author.tag} -- ${msg.author.id}\nMessage: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`)
        console.groupEnd()
        found = true
        break
      }
      if (found === true) return
    }
  }
}
