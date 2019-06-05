const Discord = require('discord.js');                                                                //for Discord library
const client = new Discord.Client();                                                                  //for Discord client
const fs = require('fs');                                                                             //for filestream
const embed = new Discord.RichEmbed()                                                                 //for Discord embeds
const readFile = require('./readFile.js');                                                            //for readFile function
const message = require('./message.js');                                                              //for converting messages to arrays
const language = require('./language.js');                                                            //for language checks
const basCom = require('./basCom.js');                                                                //for basic commands
const moderation = require('./moderation.js');                                                        //for performing moderation actions
const welcome = require ('./welcome.js');                                                             //for welcoming people to the server


let badWords = [''];
let inviteURL = "discord.gg/SvdWhY4";

fs.open('language.txt', 'r', (err, data) => {                                                         //opens the language document
  if (err) throw err;                                                                                   //if an error, throw an error in the console
  fs.close(data, (err) => { if (err) throw err; });                                                     //close the document; if an error, throw an error in the console
});

badWords = readFile.readFile();                                                                       //load profanities into memory

                                                                                                      //Connects to Discord
client.on('ready', () => {                                                                            //when client is ready/connected
  console.clear();                                                                                      //clear the console
  console.log(`Connected as ${client.user.tag} -- ${client.user.id}`);                                  //log that the bot is connected as Skipper with ID
  console.log("Ready...\n");                                                                            //log that the bot is ready
});



client.on('message', msg => {
  if(!msg.author.bot) {
    const array = message.convert(msg);
    console.log(array);
    language.language(msg, array, badWords);

    if(msg.content.toLowerCase.startsWith("!ping") || msg.content.toLowerCase.startsWith("!avatar") || msg.content.toLowerCase.startsWith("!invite")
	    { basCom.basCom(msg, inviteURL) }

	    //what the fuck is happening here????????????????????????
    else if(array.length === 2 && msg.content.toLowerCase.startsWith("!delete") && Number(array[1]) <= 100) {
	    if(array.length === 2 && Number(array[1] <= 100) { moderation.delete1(msg, array[1]); }
	else if (msg.mentions.user.first() && Number(array[5]) <= 100) { moderation.delete2(msg, array[1]); }
	}
    else if (msg.content.toLowerCase.startsWith("!ban") && msg.mentions.user.first())
	    { moderation.ban(msg, array[3]); }

    else if (msg.content.toLowerCase.startsWith("!kick") && msg.mentions.user.first())
	    { moderation.kick(msg, array[3]); }

    else if (msg.content.toLowerCase.startsWith("!softban") && msg.mentions.user.first())
	    { moderation.softban(msg, array[3]); }

    else if (msg.content.toLowerCase.startsWith("!unban") && msg.mentions.user.first())
	    { moderation.unban(msg, array[3]); }
  }
});

client.on('guildMemberAdd', member => { welcome.welcome(member); });

bot_secret_token = "";

client.login(bot_secret_token);





// NOTES
// if I convert messages to arrays, then I can check each word individually for profanities

//PSUEDOCODE
/* create const 'Discord' variable and initialize it as file path to Discord JS library
 * create const 'client' variable and initialize it as a Discord Client object
 * create const 'fs' variable and intialize it as file path to fs JS library (filestream)
 * create const 'embed' variable and intialize it as a Discord RichEmbed object
 * create const 'readFile' variable and intialize it as file path to 'readFile.js' file
 * create const 'message' variable and intialize it as file path to 'message.js' file
 * create const 'language' variable and intialize it as file path to 'language.js' file
 * create const 'basCom' variable and intialize it as file path to 'basCom.js' file
 * create const 'moderation' variable and intialize it as file path to 'moderation.js' file
 * create const 'welcome' variable and intialize it as file path to 'welcome.js' file
 *
 * intialize 'badWords' variable as an empty array
 * initialize 'inviteURL' variable as personal server invite link
 * ^^Will likely delete this and reimplement it for individual server usage^^
 *
 * open 'language.txt' file as read-only, push contents into 'data' variable
 * 	if there's an error, throw an error
 * 	close the file
 * ^^Will likely delete this function altogether, since it is both opened and closed with nothing happening in between^^
 *
 * set 'badWords' variable to the returned value of the readFile function
 *
 * when the client connects to Discord (signals 'ready')
 * 	clear the console
 * 	log in the console the tag and ID the bot is connected as
 * 	log in the console that it is ready
 *
 * when the client signals a message received
 * 	if the message author is not a bot
 * 		create const 'array' variable and set it to returned value of the convert function
 * 		log in the console the contents of the array
 * 		call language function and pass in message object, 'array' array, and 'badWords' array
 *
 * 		if the message content (in lower case) starts with "!ping" or "!avatar" or "!invite"
 * 			call basCom function passing in message object and 'inviteURL' variable
 *
 * 		**IDK WHY I WROTE THE DELETE CONDITIONALS THE WAY I DID; WILL REVIEW AT A LATER TIME**
 *
 * 		or if the message content (in lower case) starts with "!ban" and the message mentions a user
 * 			call ban function (in 'moderation.js') and pass in message object and index 3 of 'array' variable
 *
 *		or if the message content (in lower case) starts with "!kick" and mentions a user
 *			call kick function (in 'moderation.js') and pass in message object and index 3 of 'array' variable
 *		or if the message content (in lower case) starts with "!softban" and the message mentions a user
 *			call 'softban' function (in 'moderation.js') and pass in the message object and index 3 of 'array' variable
 *		or if the message content (in lower case) starts with "!unban" and the message mentions a user
 *			call 'unban' funciton (in 'moderation.js') and pass in the message object and index 3 of 'array' variable
 *
 * when the client signals 'guildMemberAdd' (someone joins a server) call 'welcome' function (in 'welcome.js') and pass in the member
 *
 * 'bot_secret_token' variable equals the token provided in the developer portal
 *
 * client object calls login function and passes in 'bot_secret_token' variable
 */
