/////////////////////////////////////////////////////////////////
//  Title:        basCom.js                                    //
//  Author:       Jake Roberts                                 //
//  Created Date: 4/24/2019                                    //
//  Updated:      6/4/2019                                     //    
//  Description:  Checks messages passed in for non-moderation //
//  		  commands                                     //
//  Dependencies: None                                         //
/////////////////////////////////////////////////////////////////

const Discord = require('discord.js');      //for Discord library
const client = new Discord.Client();        //for Discord client
const embed = new Discord.RichEmbed()       //for Discord embeds

exports.basCom = async function(msg, inviteURL) {
  // Check message contents for basic commands
    if (msg.content.startsWith('!ping')) {
      const ping = await message.channel.send("Ping?");
      ping.edit(`Pong! **${ping.createdTimestamp - message.createdTimestamp}ms**`)

      msg.reply(`Pong! -- ${client.ping}`);
      console.log("\nRequest:");
      console.group();
      	console.log(msg.author.tag);
      	console.log(`Message: "${msg.content}"\nTimestamp: ${msg.createdTimestamp}`);
      console.groupEnd();
    }
    else if(msg.content.startsWith("!avatar")) {
      msg.reply(msg.author.avatarURL);
      console.log("\nRequest:")
      console.group();
      	console.log(`${msg.author.tag} -- ${msg.author.id}\nAvatar`);
      console.groupEnd();
    }
    else if(msg.content.startsWith("!invite")) {
      if(inviteURL === "") msg.channel.send(`You haven't set an invite link yet!`)
      else {
        embed
          .setTitle("Invite!")
          .setAuthor(msg.author.tag, msg.author.avatarURL)
          .setColor("#000000")
          .setDescription(`Invite Link --> ${inviteURL}`)
          .setFooter(`User ID: ${msg.author.id}`, msg.author.avatarURL)
          .setThumbnail("https://bit.ly/2TvWFNG")
          .setTimestamp()
          .addField("Expiration", "Expires: Never")
          .addField("Current Uses", )

        msg.channel.send({embed});
      }
    }
}

//PSUEDOCODE
/* Acquire the Discord JS library
 * Create discord client object
 * create Discord Rich embed object
 *
 * export basCom function
 * 	if the message starts with "!ping"
 * 		create a variable with string that says "ping?" and wait
 * 		edit string to say "Pong!" and provide the ping (time difference between ping variable creation timestamp and message creation timestamp
 *
 * 		send reply to message author saying "Pong!" and provide client ping
 * 		log in console "Request:"
 * 		CONSOLE GROUP LOG START
 * 			log in console the message author's tag (Example#0000)
 *			log in console the message content and timestamp
 * 		CONSOLE GROUP LOG END
 *
 * 		^^can also start console log with \t to rather than group/groudEnd^^ (Example: console.log(\t...))
 * 	
 * 	if the message starts with "!avatar"
 * 		send reply to message author with a URL for their profile picture
 *		log in console "Request:"
 *		CONSOLE GROUP START
 *			log in console message author tag (Example#0000) and message author ID (17-18 digit number)
 *		CONSOLE GROUP END
 *
 *		^^can also start console log with \t rather than group/groupEnd^^ (Example: console.log(\t....))
 *	
 *	if the message starts with "!invite"
 *		and if the 'inviteURL' variable equals and empty string, send a message saying "You haven't set an invite link yet!"
 *		otherwise
 *			create an embed with properties:
 *				title: 		 invite
 *				author: 	 message author tag with thumbnail message author avatar URL
 *				color: 		 whatever #000000 is
 *				description: 	 the invite link
 *				footer: 	 user ID with message author ID and thumbnail message author avatar URL
 *				large thumbnail: Skipper's avatar
 *				extra field 1:   displays in how long the invite will expire
 *				extra field 2:   displays the number of uses (to be implemented at a later date)
 *
 *			send the embed to the channel command was sent from
 */
